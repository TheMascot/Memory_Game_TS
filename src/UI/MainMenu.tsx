import { useNavigate } from 'react-router';
import { type Action, type InitialState } from '../App';
import Button from '../components/Button';
import Settings from '../components/Settings';
import TitleUserAndScores from '../components/TitleUserAndScores';

type Props = {
  dispatch: React.Dispatch<Action>;
  dataStore: InitialState;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

// type MainButtonsId = 'game' | 'about';

function MainMenu({ dispatch, dataStore, userName, setUserName }: Props) {
  const navigate = useNavigate();

  function handleNewGameClick() {
    navigate(`/game/${dataStore.cardsNum}/${dataStore.searchFor}/${dataStore.scoreType}`);
  }
  function handleAboutClick() {
    navigate(`/about`);
  }

  return (
    <>
      <div className="h-[calc(100vh-40px)] overflow-clip m-1 sm:m-2 md:m-3 lg:m-5">
        <div className=" flex flex-col justify-around inset-ring-amber-600 inset-ring-2 shadow-slate-950 shadow-xl ml-auto mr-auto w-fit xs:w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-3xl place-content-center mt-[2vh] h-[calc(100vh-40px)] rounded-2xl bg-gradient-to-br from-blue-700 via-sky-600 to-blue-800 p-1 sm:p-1 md:p-2 lg:p-4 overflow-auto">
          <TitleUserAndScores userName={userName} setUserName={setUserName} />
          <div className="flex justify-between md:mr-5 md:ml-5 lg:mr-10 lg:ml-10">
            <Settings dispatch={dispatch} dataStore={dataStore}></Settings>
            <div className="flex flex-1/4 flex-col justify-end h-[100%] gap-5 mr-1">
              <Button
                onClick={handleNewGameClick}
                label="New Game"
                id="game"
                type="newgame"
              ></Button>
              <Button onClick={handleAboutClick} label="About" id="about" type="normal"></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;

// Setting for time before not-matching card turnback
