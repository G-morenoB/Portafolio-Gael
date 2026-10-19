import { useEffect, useState } from 'react'
import { folders } from './data/content'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import FolderStack from './components/FolderStack'
import HiModal from './components/HiModal'
import Viewer from './components/Viewer'
import Footer from './components/Footer'

export default function App() {
  const [stage, setStage] = useState('closed') // closed | hi | open
  const [view, setView] = useState({ type: 'bio', index: -1 })
  const [bounce, setBounce] = useState(-1)

  const openBio = () => { setView({ type: 'bio', index: -1 }); setStage('hi') }
  const openFolder = (i) => { setView({ type: 'project', index: i }); setStage('open') }

  const close = () => {
    const i = view.type === 'project' ? view.index : -1
    setStage('closed')
    if (i >= 0) {
      setTimeout(() => setBounce(i), 460)   // la carpeta "rebota" al guardarse
      setTimeout(() => setBounce(-1), 900)
    }
  }

  useEffect(() => {
    if (stage !== 'hi') return
    const t = setTimeout(() => setStage('open'), 1200)
    const esc = (e) => e.key === 'Escape' && close()
    addEventListener('keydown', esc)
    return () => { clearTimeout(t); removeEventListener('keydown', esc) }
  }, [stage])

  return (
    <>
      <div className="wrap">
        <TopBar />
        <Hero />
        <Intro onLearnMore={openBio} />
        <FolderStack folders={folders} bounce={bounce} onHi={openBio} onOpen={openFolder} />
        <Footer />
      </div>
      <HiModal show={stage === 'hi'} onNext={() => setStage('open')} onClose={close} />
      <Viewer open={stage === 'open'} view={view} folders={folders} onClose={close} onSelect={openFolder} />
    </>
  )
}
