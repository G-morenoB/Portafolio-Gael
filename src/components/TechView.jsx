import { techGroups } from '../data/content'

export default function TechView() {
  return (
    <div className="track">
      {techGroups.map((g) => (
        <div className="info tech" key={g.title}>
          <h3>{g.title}</h3>
          <div className="chips">
            {g.items.map((t) => {
              const item = typeof t === 'string' ? { name: t } : t
              return (
                <span key={item.name}>
                  {item.icon && <img src={item.icon} alt="" />}
                </span>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}