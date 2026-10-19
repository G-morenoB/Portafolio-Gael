import { profile } from '../data/content'

// Paso 2 de la presentación: foto + tu información
export default function BioView() {
  return (
    <div className="pair">
      <div className="pic">
        {profile.photo ? <img src={profile.photo} alt={profile.name} /> : <span>Tu foto aquí</span>}
      </div>
      <div className="txt">
        <svg viewBox="0 0 400 300" fill="none" aria-hidden="true">
          <path d="M40 280C20 120 90 20 170 40C230 55 150 200 140 210C130 160 220 20 300 60C360 90 260 190 380 175" stroke="#b09bff" strokeWidth="22" strokeLinecap="round" />
        </svg>
        <div>{profile.bio.map((p, i) => <p key={i}>{p}</p>)}</div>
      </div>
    </div>
  )
}
