import Rail from "./components/Rail.jsx";
import Intro from "./components/Intro.jsx";
import Summary from "./components/Summary.jsx";
import Route from "./components/Route.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import OutsideWork from "./components/OutsideWork.jsx";
import { profile } from "./data/resume.js";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="page">
        <Rail />
        <main id="main">
          <Intro />
          <Summary />
          <Route />
          <Experience />
          <Education />
          <Skills />
          <OutsideWork />
          <footer>Updated {profile.updated}</footer>
        </main>
      </div>
    </>
  );
}
