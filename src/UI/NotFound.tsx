import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

function NotFound() {
  return (
    <div className="flex justify-center text-center mt-auto mb-auto h-[100vh]">
      <div className="text-amber-100 text-3xl flex flex-col m-auto gap-2">
        <p>Looks like you took a wrong turn somewhere.</p>
        <p>Please navigate back to the menu.</p>
        <NavLink to="/" replace={true}>
          <Button id="back" type="normal" label="Back to the main menu"></Button>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
