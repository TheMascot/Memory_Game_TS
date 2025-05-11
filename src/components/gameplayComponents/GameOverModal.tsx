type Props = {
  searchFor: string;
  scoreType: string;
  score: number;
  time: string;
  userName: string;
};

function GameOverModal({ searchFor, scoreType, score, time, userName }: Props) {
  if (userName !== 'Unnamed Player') {
    if (scoreType === 'time') {
      localStorage.setItem(`${userName}-time`, time);
    }
    if (scoreType === 'clicks') {
      localStorage.setItem(`${userName}-score`, String(score));
    }
  }

  return (
    <div className="flex row-start-2 col-start-1 z-10 xl:text-2xl lg:text-2xl md:text-xl font-bold border-2 border-amber-600">
      <div className="flex flex-col gap-10 m-auto text-center border-2 bg-slate-900 text-amber-600 p-2">
        <h1>✅ The game is over.</h1>
        <p>👏 Congratulations on finding all the {searchFor}!</p>
        {score && scoreType === 'clicks' && <p>🔷 Your final score is: {score}</p>}
        {time && scoreType === 'time' && <p>⌚ Your final time is: {`${time}`}</p>}
      </div>
    </div>
  );
}

export default GameOverModal;
