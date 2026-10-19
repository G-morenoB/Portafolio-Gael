import { profile } from '../data/content'

// Paso 1 de la presentación: la tarjeta "Hi" sube al centro y luego se abre sola (o con un clic).
export default function HiModal({ show, onNext, onClose }) {
  if (!show) return null
  return (
    <>
      <div className="backdrop" onClick={onNext} />
      <button className="x x-fixed" onClick={onClose} aria-label="Cerrar">✕</button>
      <button className="hi-big" onClick={onNext}>{profile.hiLabel}</button>
    </>
  )
}
