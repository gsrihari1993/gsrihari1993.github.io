import { profile, nav } from "../data/resume.js";

export default function Rail() {
  const { photo } = profile;
  return (
    <header className="rail">
      <img className="portrait" src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} />
      <div>
        <h1>{profile.name}</h1>
        <p className="role">
          {profile.role}
          <br />
          {profile.location}
        </p>
        <p className="badge" title={profile.badge.title}>{profile.badge.text}</p>
      </div>
      <ul className="contact">
        <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li><a href={profile.linkedin}>LinkedIn</a></li>
      </ul>
      <a className="cv-link" href={profile.cv}>Download CV (PDF)</a>
      <nav className="nav" aria-label="Sections">
        <ul>
          {nav.map((item) => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
