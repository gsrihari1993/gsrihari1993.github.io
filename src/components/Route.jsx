import { route } from "../data/resume.js";

export default function Route() {
  return (
    <section className="route-section" aria-labelledby="route-h">
      <h2 id="route-h">Where the work has happened</h2>
      <ol className="route">
        {route.map((stop) => (
          <li key={`${stop.city}-${stop.years}`}>
            <span className="city">{stop.city}</span>
            <span className="years">{stop.years}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
