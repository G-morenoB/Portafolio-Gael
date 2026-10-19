import { profile } from '../data/content'
import useClock from '../hooks/useClock'

export default function TopBar() {
  const time = useClock(profile.timeZone)
  return (
    <header className="top">
      <span>{profile.shortName}</span>
      <span>{profile.role}</span>
      <span>{profile.topLabel}</span>
      <span>{time} {profile.city}</span>
      <a className="contact" href={`mailto:${profile.email}`}>Contacto <b>+</b></a>
    </header>
  )
}
