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
      <ul className="shots">
        {outsideWork.photos.map((photo) => (
          <li key={photo.src}>
            <img src={photo.src} width={photo.width} height={photo.height} loading="lazy" alt={photo.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
