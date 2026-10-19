import { useEffect, useRef } from 'react'
import ProjectView from './ProjectView'
import BioView from './BioView'

// Contenedor que sube desde abajo. Arriba: solo la pestaña activa. Abajo: las demás carpetas.
export default function Viewer({ open, view, folders, onClose, onSelect }) {
  const panelRef = useRef(null)
  const isProject = view.type === 'project'
  const active = isProject ? folders[view.index] : null

  const scroll = (d) => {
    const el = panelRef.current?.querySelector('.track, .txt')
    el?.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' })
  }
  const step = (d) => isProject && onSelect((view.index + d + folders.length) % folders.length)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') scroll(-1)
      if (e.key === 'ArrowRight') scroll(1)
      if (e.key === 'ArrowUp') step(-1)
      if (e.key === 'ArrowDown') step(1)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [open, view])

  return (
    <div className={'ov' + (open ? ' on' : '')} role="dialog" aria-modal="true">
      <div className="bar">
        <button className="x" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="tabs">{active && <button className="on" tabIndex={-1}>{active.name}</button>}</div>
        <div className="dpad">
          <button style={{ gridArea: 'u' }} onClick={() => step(-1)} aria-label="Carpeta anterior">↑</button>
          <button style={{ gridArea: 'l' }} onClick={() => scroll(-1)} aria-label="Anterior">←</button>
          <button style={{ gridArea: 'd' }} onClick={() => step(1)} aria-label="Carpeta siguiente">↓</button>
          <button style={{ gridArea: 'r' }} onClick={() => scroll(1)} aria-label="Siguiente">→</button>
        </div>
      </div>
      <div className="panel" ref={panelRef}>
        <div className="panel-inner" key={view.index}>
          {isProject ? <ProjectView folder={active} /> : <BioView />}
        </div>
      </div>
      <div className="dock">
        {folders.map((f, i) => i !== view.index && (
          <button key={f.name} onClick={() => onSelect(i)}>{f.name}</button>
        ))}
      </div>
    </div>
  )
}
