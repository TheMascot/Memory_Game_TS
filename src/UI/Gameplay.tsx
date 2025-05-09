import { useParams } from 'react-router';
import { type InitialState } from '../App';
import Card from '../components/Card';
import { useCardDeck } from '../hooks/useCardDeck';
import GameInfoBar from './GameInfoBar';
import GameOver from '../components/GameOver';

type Params = {
  userName: string;
};

function Gameplay({ userName }: Params) {
  const { cardsNum, searchFor, scoreType } = useParams() as InitialState;
  const searchMode: number = searchFor === 'pairs' ? 2 : 3;
  const requiredCards: number = Number(cardsNum) / searchMode;

  const {
    handleCardClick,
    imageData,
    reset: resetGame,
    score,
    seconds,
    minutes,
    gameOver,
  } = useCardDeck(searchMode, requiredCards, Number(cardsNum));

  const activeCardsNum: number = imageData.length;

  // MORE FEATURE TODO
  // rush mode where counter counts down from card/2 and every pair adds 5 seconds; score is plain 10 for pairs plus current seconds remaining

  return (
    <>
      <div
        className={`grid 'grid-cols-6'grid-rows-[10vh,90vh] mb-auto mt-auto mr-auto ml-auto bg-slate-900 gap-2 ${
          activeCardsNum <= 12
            ? 'max-w-180 w-screen p-10 xs:w-100 xs:mt-10 sm:w-140 md:w-140 lg:w-160 xl:w-180 '
            : activeCardsNum > 12 && activeCardsNum <= 24
            ? 'max-w-280 w-screen p-5 sm:mt-10 md:mt-10 md:w-170 lg:mt-5 lg:w-240 xl:mt-10 xl:w-280 2xl:w-280 2xl:mt-2'
            : 'max-w-360 w-screen p-2 sm:w-190 lg:mt-5 lg:w-255 xl:mt-5 xl:w-320 2xl:w-360'
        }`}
      >
        <GameInfoBar
          score={score}
          seconds={seconds}
          minutes={minutes}
          scoreType={scoreType}
          searchMode={searchMode}
          requiredCards={requiredCards}
          resetGame={resetGame}
        />
        {gameOver ? (
          <GameOver
            userName={userName}
            searchFor={searchFor}
            scoreType={scoreType}
            score={score}
            time={`${minutes} minutes and ${seconds} seconds`}
          />
        ) : (
          ''
        )}
        <ul
          id="card-field"
          className={`col-span-full row-start-2 grid grid-cols-[repeat(auto-fit,_minmax(14vw,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(12vw,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(9vw,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(9vw,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(8vw,_1fr))] 2xl:grid-cols-[repeat(auto-fit,_minmax(7vw,_1fr))] gap-2.5 ${
            gameOver ? 'opacity-50' : ''
          }`}
        >
          {imageData.map((image) => (
            <li key={image.key}>
              <Card cardObject={image} onClick={() => handleCardClick(image.id)} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Gameplay;
