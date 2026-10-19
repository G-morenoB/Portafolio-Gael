import { profile } from '../data/content'

// Los colores fluyen con la animación "flow" definida en styles.css
export default function Hero() {
  return <h1 className="mural">{profile.heroText}</h1>
}
