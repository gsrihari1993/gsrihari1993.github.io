import Job from "./Job.jsx";
import { experience } from "../data/resume.js";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-h">
      <h2 id="experience-h">Experience</h2>
      {experience.map((job) => (
        <Job key={`${job.org}-${job.when}`} {...job} />
      ))}
    </section>
  );
}
