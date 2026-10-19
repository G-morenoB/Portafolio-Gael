import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a> · <a href={profile.linkedin}>LinkedIn</a> · <a href={profile.github}>GitHub</a>
      </span>
    </footer>
  )
}
