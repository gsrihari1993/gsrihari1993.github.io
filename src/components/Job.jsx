// One timeline entry. Used for jobs (collapsible) and education (always open).
export default function Job({ id, when, title, org, place, bullets, collapsible = false, open = true, onToggle, flash = false }) {
  const bodyId = `job-body-${id}`;
  return (
    <article className={`job${flash ? " flash" : ""}`} id={`job-${id}`}>
      <p className="when">{when}</p>
      <h3>
        {collapsible ? (
          <button type="button" className="job-toggle" aria-expanded={open} aria-controls={bodyId} onClick={() => onToggle(id)}>
            {title}
          </button>
        ) : (
          title
        )}
      </h3>
      <p className="org">
        <strong>{org}</strong>, {place}
      </p>
      {bullets && (
        <div className="job-body" id={bodyId} hidden={collapsible && !open}>
          <ul>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
