import { summary } from "../data/resume.js";

export default function Summary() {
  return (
    <section aria-labelledby="summary-h">
      <h2 id="summary-h">Summary</h2>
      <div className="summary">
        {summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
