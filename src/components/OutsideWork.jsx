import { outsideWork } from "../data/resume.js";

export default function OutsideWork() {
  return (
    <section id="outside-work" className="outside" aria-labelledby="outside-h">
      <h2 id="outside-h">Outside work</h2>
      <ul className="facts">
        {outsideWork.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </section>
  );
}
