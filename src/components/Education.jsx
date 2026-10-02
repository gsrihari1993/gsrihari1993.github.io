import Job from "./Job.jsx";
import { education } from "../data/resume.js";

export default function Education() {
  return (
    <section id="education" className="edu" aria-labelledby="education-h">
      <h2 id="education-h">Education</h2>
      {education.map((item) => (
        <Job key={item.id} {...item} />
      ))}
    </section>
  );
}
