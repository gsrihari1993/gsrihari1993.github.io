import { skills } from "../data/resume.js";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <h2 id="skills-h">Skills</h2>
      <dl className="skills">
        {skills.map((skill) => (
          <div key={skill.label}>
            <dt>{skill.label}</dt>
            <dd>{skill.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
