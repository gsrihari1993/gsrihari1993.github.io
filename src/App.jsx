import { useCallback, useEffect, useState } from "react";
import Rail from "./components/Rail.jsx";
import Intro from "./components/Intro.jsx";
import Summary from "./components/Summary.jsx";
import Route from "./components/Route.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import OutsideWork from "./components/OutsideWork.jsx";
import { experience, profile } from "./data/resume.js";

export default function App() {
  // The most recent role starts open; the rest start collapsed.
  const [open, setOpen] = useState(() => new Set([experience[0].id]));
  const [flash, setFlash] = useState(null);

  const toggle = useCallback((id) => {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const setAll = useCallback((expand) => {
    setOpen(expand ? new Set(experience.map((job) => job.id)) : new Set());
  }, []);

  // A stop on the route strip opens its role, scrolls there and highlights it.
  const showRole = useCallback((id) => {
    setOpen((current) => new Set(current).add(id));
    setFlash({ id, at: Date.now() });
  }, []);

  useEffect(() => {
    if (!flash) return undefined;
    const element = document.getElementById(`job-${flash.id}`);
    if (element) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      element.querySelector(".job-toggle")?.focus({ preventScroll: true });
    }
    const timer = setTimeout(() => setFlash(null), 1400);
    return () => clearTimeout(timer);
  }, [flash]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="page">
        <Rail />
        <main id="main">
          <Intro />
          <Summary />
          <Route onSelect={showRole} />
          <Experience open={open} onToggle={toggle} onSetAll={setAll} flashId={flash?.id} />
          <Education />
          <Skills />
          <OutsideWork />
          <footer>Updated {profile.updated}</footer>
        </main>
      </div>
    </>
  );
}
