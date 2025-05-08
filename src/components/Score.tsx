type Props = {
  score: number;
};

function Score({ score }: Props) {
  return (
    <div className="flex flex-col justify-start mt-auto mb-auto">
      <h1 className="ml-auto mr-auto text-sm md:text-lg lg:text-xl text-amber-500">Your score:</h1>
      <p className="font-bold text-sm md:text-xl lg:text-2xl ml-auto mr-auto text-amber-500">
        {score}
      </p>
    </div>
  );
}

export default Score;
