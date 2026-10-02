import { intro } from "../data/resume.js";

export default function Intro() {
  return (
    <section aria-labelledby="intro">
      <h2 className="lede" id="intro">{intro.headline}</h2>
      <p className="sub">{intro.sub}</p>
    </section>
  );
}
