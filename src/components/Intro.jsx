import { profile } from '../data/content'

export default function Intro({ onLearnMore }) {
  return (
    <div className="intro">
      <span>Proyectos ↓</span>
      <p>{profile.intro} <button onClick={onLearnMore}>Conoce más</button></p>
    </div>
  )
}
