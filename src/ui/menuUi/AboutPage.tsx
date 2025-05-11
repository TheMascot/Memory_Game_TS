import { NavLink } from 'react-router-dom';
import Button from '../../components/sharedComponents/Button';

function AboutPage() {
  return (
    <>
      <div className=" bg-gradient-to-br from-amber-500 via-amber-700 rounded-2xl to-amber-600 max-w-200 ml-auto mr-auto mt-0 xs:mt-10 pl-5 pr-5 text-center text-lg sm:text-xl md:text-2xl">
        <h1 className="text-3xl font-bold pb-10 pt-5">Memory game - about</h1>
        <p className="pb-3">
          This memory game is a personal hobby project built to practice my skills in JavaScript,
          TypeScript, React, and Tailwind CSS.
        </p>
        <p className="pb-3">
          Scores and times are saved in your browser's local storage and are linked to the player
          name you provide. Each new score replaces the previous one — there's no tracking of
          personal bests or fastest times currently.
        </p>
        <p className="pb-3">
          I hope you find the game both fun and a bit challenging—especially when hunting for trios!
        </p>
        <p>Created by F. Attila, a.k.a. TheMascot</p>
        <p className="pb-5">2025.05.11</p>
      </div>
      <div className="flex justify-center mt-5 w-screen">
        <NavLink to="/">
          <Button id="back" type="normal" label="Back to the main menu"></Button>
        </NavLink>
      </div>
    </>
  );
}

export default AboutPage;
