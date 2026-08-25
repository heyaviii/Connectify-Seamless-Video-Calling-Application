import { Link, useLocation } from 'react-router-dom'

const VideoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
)

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="glass-panel px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/30 group-hover:shadow-brand-600/50 transition-shadow">
              <VideoIcon />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Connectify
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-2">
            {!isHome && (
              <Link to="/" className="btn-ghost text-sm">
                ← Home
              </Link>
            )}
            <Link to="/join" className="btn-secondary text-sm py-2 px-4">
              Join Room
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
