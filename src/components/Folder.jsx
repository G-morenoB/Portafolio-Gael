export default function Folder({ folder, index, bounce, onOpen }) {
  return (
    <button
      className={'folder' + (bounce ? ' bounce' : '')}
      style={{ '--i': index, top: 58 + index * 62, zIndex: 2 + index }}
      aria-label={`Abrir ${folder.name}`}
      onClick={() => onOpen(index)}
    >
      <span className="tab">{folder.name}</span>
      <span className="peek"><i /><i /><i />{index % 2 === 0 && <i className="c" />}</span>
    </button>
  )
}
