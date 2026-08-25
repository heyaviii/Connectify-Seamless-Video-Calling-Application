import { useNavigate } from 'react-router-dom'
import BackgroundOrbs from '../components/BackgroundOrbs'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      <BackgroundOrbs />
      <div className="relative z-10 text-center page-enter">
        <div className="font-display font-extrabold text-[10rem] leading-none text-white/5 select-none mb-2">
          404
        </div>
        <h1 className="font-display font-bold text-3xl text-white mb-3 -mt-8">Page not found</h1>
        <p className="text-surface-300 font-body mb-8">The room or page you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')} className="btn-primary">
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
