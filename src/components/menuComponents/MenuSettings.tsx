import Button from '../sharedComponents/Button';
import { type Action } from '../../App';
import { type InitialState } from '../../App';
type Props = {
  dispatch: React.Dispatch<Action>;
  dataStore: InitialState;
};
function MenuSettings({ dispatch, dataStore }: Props) {
  function handleSettingsChange(event: React.MouseEvent<HTMLButtonElement>) {
    const target = event.target as HTMLButtonElement;
    const family = target.dataset.family as Action['type'];
    const id = target.id as Action['payload'];

    dispatch({ type: family, payload: id });
  }

  return (
    <div className="flex flex-1/3 flex-col justify-evenly ml-auto mr-auto gap-1 pr-1 text-md xs:text-md sm:text-lg">
      <p className="text-center font-bold underline-offset-2 underline">Settings</p>
      <p className="text-center">I'm searching for...</p>
      <div className="flex flex-col justify-center ml-auto mr-auto gap-1">
        {/* generate these buttons from an object with map() TODO */}
        <Button
          id="pairs"
          data="searchFor"
          label="🃏🃏 Pairs 🀄🀄"
          onClick={handleSettingsChange}
          type="small"
          selected={dataStore.searchFor === 'pairs'}
        />
        <Button
          id="trios"
          data="searchFor"
          label="🃏🃏🃏 Trios 🀄🀄🀄"
          onClick={handleSettingsChange}
          type="small"
          selected={dataStore.searchFor === 'trios'}
        />
      </div>
      <p className="text-center">Number of cards...</p>
      <div className="flex justify-evenly ">
        <Button
          id="12"
          data="cardsNum"
          label="12"
          onClick={handleSettingsChange}
          type="small"
          selected={dataStore.cardsNum === '12'}
        />

        <Button
          id="24"
          data="cardsNum"
          label="24"
          onClick={handleSettingsChange}
          type="small"
          selected={dataStore.cardsNum === '24'}
        />

        <Button
          id="36"
          data="cardsNum"
          label="36"
          onClick={handleSettingsChange}
          type="small"
          selected={dataStore.cardsNum === '36'}
        />
      </div>
      <p className="text-center">Scoring based on...</p>
      <div className="flex justify-around ">
        <Button
          id="clicks"
          data="scoreType"
          label="Clicks"
          onClick={handleSettingsChange}
          type="small"
          selected={dataStore.scoreType === 'clicks'}
        />
        <Button
          id="time"
          data="scoreType"
          label="Time"
          onClick={handleSettingsChange}
          type="small"
          selected={dataStore.scoreType === 'time'}
        />
        <Button
          id="noScore"
          data="scoreType"
          label="No scoring"
          onClick={handleSettingsChange}
          type="small"
          selected={dataStore.scoreType === 'noScore'}
        />
      </div>
    </div>
  );
}

export default MenuSettings;
