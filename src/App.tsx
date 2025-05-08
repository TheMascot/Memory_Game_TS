import { BrowserRouter, Route, Routes } from 'react-router';
import About from './UI/About';
import Gameplay from './UI/Gameplay';
import MainMenu from './UI/MainMenu';
import NotFound from './UI/NotFound';
import Test from './UI/Test';
import { useReducer, useState } from 'react';

export type InitialState = typeof initialState;

export type Action = {
  type: 'searchFor' | 'cardsNum' | 'scoreType';
  payload: 'pairs' | 'trios' | '12' | '24' | '36' | 'clicks' | 'time' | 'noScore';
};

const initialState = {
  searchFor: 'pairs',
  cardsNum: '12',
  scoreType: 'clicks',
};

function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case 'searchFor':
      return { ...state, searchFor: action.payload };
    case 'cardsNum':
      return { ...state, cardsNum: action.payload };
    case 'scoreType':
      return { ...state, scoreType: action.payload };
    default:
      throw new Error('Unknown type of activity.');
  }
}

function App() {
  const [dataStore, dispatch] = useReducer(reducer, initialState);
  const [userName, setUserName] = useState<string>('Unnamed Player');
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <MainMenu
              dispatch={dispatch}
              dataStore={dataStore}
              userName={userName}
              setUserName={setUserName}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/game/:cardsNum/:searchFor/:scoreType"
          element={<Gameplay userName={userName} />}
        />
        <Route path="/*" element={<NotFound />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
