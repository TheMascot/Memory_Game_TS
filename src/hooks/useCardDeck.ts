import { useEffect, useState } from 'react';
import { createDeck } from '../utils/createDeck';
import { checkForSameCards } from '../utils/checkForSameCards';
import { ImageData } from '../utils/imageDataGenerator';
import { useStopwatch } from 'react-timer-hook';
import { scoring } from '../utils/scoring';

export function useCardDeck(searchMode: number, requiredCards: number, cardsNum: number) {
  const [canClick, setCanClick] = useState(true);
  const [imageData, setImageData] = useState<ImageData>([]);
  const [clickedCards, setClickedCards] = useState<string[]>([]);
  const [score, setScore] = useState(cardsNum);
  const foundCardNum: number =
    imageData.reduce((acc, curr) => (curr.found ? acc + 1 : acc), 0) / searchMode;

  const { seconds, minutes, reset: resetStopWatch, pause } = useStopwatch();

  const gameOver: boolean = foundCardNum * searchMode === cardsNum;

  //Initial deck creation
  useEffect(() => {
    const deck: ImageData = createDeck(searchMode, requiredCards);
    setImageData(deck);
  }, [requiredCards, searchMode]);

  // Handling clicked pairs or trios
  useEffect(() => {
    if (clickedCards.length === searchMode) {
      if (!checkForSameCards(clickedCards, searchMode)) {
        setCanClick(false);
        const timeout = setTimeout(() => {
          setClickedCards([]);
          setImageData(() => imageData.map((image) => ({ ...image, clicked: false })));
          setCanClick(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
      if (checkForSameCards(clickedCards, searchMode)) {
        const addToScore = scoring(cardsNum, searchMode, foundCardNum, true);

        setScore((s) => s + addToScore);
        setImageData(() =>
          imageData.map((image) =>
            image.name === clickedCards[0] ? { ...image, found: true } : { ...image }
          )
        );
        setClickedCards([]);
      }
    }
  }, [clickedCards, searchMode, imageData, cardsNum, foundCardNum, gameOver]);

  // Checking if game is over, stopping the clock
  useEffect(() => {
    if (gameOver) {
      pause();
    }
  }, [gameOver, pause]);

  // Handling each click
  function handleCardClick(id: number) {
    // limiting fast clicks
    if (!canClick) return;

    // data of currently clicked card
    const currentCard = imageData.find((image) => image.id === id);
    if (!currentCard) throw new Error('Unable to access card data.');

    // clicking the same card should have no effect
    if (currentCard.clicked) return;

    setScore((s) => s + scoring(cardsNum, searchMode, foundCardNum, false));

    // setting the data of current card
    setImageData(
      imageData.map((image) => (image.id === id ? { ...image, clicked: true } : { ...image }))
    );

    const currentCardName = currentCard.name;

    // setting the data of clicked card list
    setClickedCards((imageData) => [...imageData, currentCardName]);
  }

  // Creating a new game with the same settings
  function reset() {
    const deck: ImageData = createDeck(searchMode, requiredCards);
    setImageData(deck);
    setCanClick(true);
    setClickedCards([]);
    setScore(cardsNum);
    resetStopWatch();
  }

  return {
    handleCardClick,
    reset,
    imageData,
    clickedCards,
    foundCardNum,
    score,
    seconds,
    minutes,
    gameOver,
  };
}
