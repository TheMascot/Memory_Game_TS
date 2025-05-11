import { NavLink } from 'react-router-dom';
import DisplayTimer from '../../components/gameplayComponents/DisplayTimer';
import DisplayScore from '../../components/gameplayComponents/DisplayScore';

type Props = {
  scoreType: string;
  searchMode: number;
  requiredCards: number;
  seconds: number;
  minutes: number;
  score: number;
  resetGame: () => void;
};

function GameInfoBar({ scoreType, seconds, minutes, score, resetGame }: Props) {
  return (
    <div
      id="infotab"
      className="row-start-1 h-[10vh] border-b-2 border-slate-700 col-span-full flex justify-around"
    >
      {scoreType === 'clicks' && <DisplayScore score={score} />}
      {scoreType === 'time' && <DisplayTimer minutes={minutes} seconds={seconds} />}
      <span
        className="hover:cursor-pointer text-sm xs:text-md sm:text-md md:text-lg lg:text-xl mt-auto mb-auto text-amber-500 border-2 border-amber-600 bg-slate-700 rounded-lg p-2"
        onClick={resetGame}
      >
        🔁 Restart
      </span>
      <NavLink
        className="mt-auto mb-auto text-sm xs:text-md sm:text-md md:text-lg lg:text-xl text-amber-500 border-2 border-amber-600 bg-slate-700 rounded-lg p-2"
        to="/"
      >
        📜 Back to menu
      </NavLink>
    </div>
  );
}

export default GameInfoBar;
