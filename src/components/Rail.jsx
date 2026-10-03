import { profile, nav } from "../data/resume.js";
import useActiveSection from "../hooks/useActiveSection.js";
import ThemeToggle from "./ThemeToggle.jsx";
import CopyEmail from "./CopyEmail.jsx";

const navIds = nav.map((item) => item.href.slice(1));
const watchedIds = ["top", "summary", ...navIds];

export default function Rail() {
  const { photo } = profile;
  const active = useActiveSection(watchedIds);

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
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <CopyEmail email={profile.email} />
        </li>
        <li><a href={profile.linkedin}>LinkedIn</a></li>
      </ul>
      <a className="cv-link" href={profile.cv}>Download CV (PDF)</a>
      <nav className="nav" aria-label="Sections">
        <ul>
          {nav.map((item) => {
            const current = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a href={item.href} className={current ? "is-active" : undefined} aria-current={current ? "location" : undefined}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
