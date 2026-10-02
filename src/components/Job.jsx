// One timeline entry. Used for both jobs and education.
export default function Job({ when, title, org, place, bullets }) {
  return (
    <article className="job">
      <p className="when">{when}</p>
      <h3>{title}</h3>
      <p className="org">
        <strong>{org}</strong>, {place}
      </p>
      {bullets && (
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
