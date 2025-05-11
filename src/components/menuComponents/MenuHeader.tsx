import { useState } from 'react';
import Button from '../sharedComponents/Button';

type Props = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const titleLetterStyling =
  'inset-ring-2 inset-ring-blue-950/70 rounded-lg text-center shadow-md shadow-blue-950 text-3xl sm:text-4xl md:text-5xl lg:text-5xl mr-1 sm:mr-1 md:mr-1 pb-1.5 pl-1.5 pr-2 inset-shadow-red-900 inset-shadow-lg w-10 xs:w-13 sm:w-13 md:w-15';

function MenuHeader({ userName, setUserName }: Props) {
  const [typeNewName, setTypeNewName] = useState<boolean>(false);
  const [newUserName, setnewUserName] = useState<string>('');
  const storedPoints = localStorage.getItem(`${userName}-score`);
  const storedTime = localStorage.getItem(`${userName}-time`);
  console.log(storedPoints);

  return (
    <div className="flex flex-col justify-evenly">
      {/* Title */}
      <div className="flex justify-around ml-auto mr-auto py-5 text-amber-500 font-bold tracking-widest">
        {['M', 'E', 'M', 'O', 'R', 'Y'].map((letter, i) => (
          <div key={i} className={titleLetterStyling}>
            {letter}
          </div>
        ))}
      </div>
      <div className="flex justify-around ml-auto mr-auto pb-10 text-amber-500 font-bold tracking-widest">
        {['G', 'A', 'M', 'E'].map((letter, i) => (
          <div key={i + 6} className={titleLetterStyling}>
            {letter}
          </div>
        ))}
      </div>
      <div className="flex justify-evenly border-t-2 border-b-2 border-slate-800 pt-2 pb-2">
        {/* Name display or input fields */}
        <form className="w-45 text-lg">
          {typeNewName ? (
            <div>
              <p>Player's new name:</p>
              <input
                className="border-slate-950 rounded-lg px-2 w-40 bg-slate-400 mb-2"
                placeholder="Type your name"
                autoFocus
                value={newUserName}
                onChange={(e) => {
                  e.preventDefault();
                  setnewUserName(e.target.value);
                }}
              />
            </div>
          ) : (
            <>
              <p>Player's name:</p>
              <p className="mb-2 font-bold">{userName}</p>
            </>
          )}
          <Button
            label={typeNewName ? 'Set this name' : 'Input a new name'}
            type="small"
            id="setName"
            onClick={
              typeNewName
                ? (e) => {
                    e.preventDefault();
                    if (newUserName) {
                      setUserName(newUserName);
                    }
                    setTypeNewName((f) => !f);
                  }
                : (e) => {
                    e.preventDefault();
                    setTypeNewName((f) => !f);
                  }
            }
          />
        </form>
        <div className="text-right text-lg">
          <p className="ml-auto mr-auto">Your last points:</p>
          <p className="font-bold">{storedPoints || 'Not found'}</p>
          <p className="ml-auto mr-auto">Your last time:</p>
          <p className="font-bold">{storedTime?.replace(',', ':') || 'Not found'}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
