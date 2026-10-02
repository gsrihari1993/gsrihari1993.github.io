import Job from "./Job.jsx";
import { experience } from "../data/resume.js";

export default function Experience({ open, onToggle, onSetAll, flashId }) {
  const allOpen = experience.every((job) => open.has(job.id));
  return (
    <section id="experience" aria-labelledby="experience-h">
      <div className="section-head">
        <h2 id="experience-h">Experience</h2>
        <button type="button" className="link-btn" onClick={() => onSetAll(!allOpen)}>
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>
      {experience.map((job) => (
        <Job key={job.id} {...job} collapsible open={open.has(job.id)} onToggle={onToggle} flash={flashId === job.id} />
      ))}
    </section>
  );
}
