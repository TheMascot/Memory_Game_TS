type Props = {
  minutes: number;
  seconds: number;
};

export function DisplayTimer({ minutes, seconds }: Props) {
  return (
    <div className="flex flex-col justify-start mt-auto mb-auto">
      <h1 className="ml-auto mr-auto text-sm md:text-lg lg:text-xl text-amber-500">⏱ Timer</h1>
      <span className="font-bold text-md md:text-xl lg:text-2xl ml-auto mr-auto text-amber-500">{`${
        minutes < 10 ? '0' + minutes : minutes
      }:${seconds < 10 ? '0' + seconds : seconds}`}</span>
    </div>
  );
}

export default DisplayTimer;
