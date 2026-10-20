// Cada carpeta muestra un pedacito de las imágenes del proyecto (folder.images).
// Si el proyecto no tiene imágenes, se ven bloques grises de relleno.
export default function Folder({ folder, index, bounce, onOpen }) {
  const imgs = folder.images || []
  const count = index % 2 === 0 || imgs.length > 3 ? 4 : 3
  return (
    <button
      className={'folder' + (bounce ? ' bounce' : '')}
      style={{ '--i': index, top: 58 + index * 62, zIndex: 2 + index }}
      aria-label={`Abrir ${folder.name}`}
      onClick={() => onOpen(index)}
    >
      <span className="tab">{folder.name}</span>
      <span className="peek">
        {Array.from({ length: count }, (_, k) => {
          const src = imgs[k]
          const accent = !src && k === 3
          return (
            <i
              key={k}
              className={(src ? 'img ' : '') + (accent ? 'c' : '')}
              style={src ? { backgroundImage: `url("${src}")` } : undefined}
            />
          )
        })}
      </span>
    </button>
  )
}
