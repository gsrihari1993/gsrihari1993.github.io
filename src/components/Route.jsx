import { route } from "../data/resume.js";

// Each stop links to the matching role below. Without JavaScript it is a plain
// anchor jump; with JavaScript it also opens that role and highlights it.
export default function Route({ onSelect }) {
  return (
    <section id="route" className="route-section" aria-labelledby="route-h">
      <h2 id="route-h">Where the work has happened</h2>
      <ol className="route">
        {route.map((stop) => (
          <li key={`${stop.city}-${stop.years}`}>
            <a
              className="stop"
              href={`#job-${stop.target}`}
              onClick={(event) => {
                event.preventDefault();
                onSelect(stop.target);
              }}
            >
              <span className="city">{stop.city}</span>
              <span className="years">{stop.years}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
