import { profile } from '../data/content'
import Folder from './Folder'

export default function FolderStack({ folders, bounce, onHi, onOpen }) {
  return (
    <div className="stack">
      <button className="hi" onClick={onHi} aria-label="Abrir presentación">{profile.hiLabel}</button>
      {folders.map((f, i) => (
        <Folder key={f.name} folder={f} index={i} bounce={bounce === i} onOpen={onOpen} />
      ))}
    </div>
  )
}
