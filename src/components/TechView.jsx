import { techGroups } from '../data/content'

export default function TechView() {
  return (
    <div className="track">
      {techGroups.map((g) => (
        <div className="info tech" key={g.title}>
          <h3>{g.title}</h3>
          <div className="chips">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      ))}
    </div>
  )
}
