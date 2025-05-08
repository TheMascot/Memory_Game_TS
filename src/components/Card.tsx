import { cardBackImage } from '../utils/mockDatabase';

interface Props {
  cardObject: {
    key: number;
    id: number;
    src: string;
    name: string;
    found: boolean;
    clicked: boolean;
  };
  onClick: () => void;
}

function Card({ cardObject, onClick }: Props) {
  const foundCardsStyle = cardObject.found
    ? 'border-2 border-amber-700'
    : 'border-stone-700 border-2';

  return (
    <img
      className={`rounded-xl overflow-hidden shadow-lg aspect-square ${foundCardsStyle}`}
      onClick={onClick}
      src={cardObject.clicked || cardObject.found ? cardObject.src : cardBackImage}
    ></img>
  );
}

export default Card;
