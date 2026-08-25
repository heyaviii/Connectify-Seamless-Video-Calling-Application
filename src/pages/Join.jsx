import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BackgroundOrbs from '../components/BackgroundOrbs'
import { sanitizeRoomId } from '../utils/roomUtils'

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function Join() {
  const navigate = useNavigate()
  const [roomId, setRoomId] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleJoin = (e) => {
    e.preventDefault()
    const cleanId = sanitizeRoomId(roomId)
    if (!cleanId) {
      setError('Please enter a Room ID.')
      return
    }
    if (!name.trim()) {
      setError('Please enter your name.')
      return
    }
    setError('')
    navigate(`/room/${cleanId}?name=${encodeURIComponent(name.trim())}`)
  }

  return (
    <div className="min-h-screen relative">
      <BackgroundOrbs />
      <Navbar />

      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-24 pb-12">
        <div className="w-full max-w-md page-enter">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-600/20 border border-brand-600/30 mb-5 text-3xl">
              🔗
            </div>
            <h1 className="font-display font-bold text-3xl text-white mb-2">Join a Meeting</h1>
            <p className="text-surface-300 font-body text-sm">Enter the Room ID shared with you to join.</p>
          </div>

          {/* Form */}
          <div className="card p-6 space-y-4">
            <div>
              <label className="block text-sm font-body text-surface-300 mb-1.5">Your Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="e.g. Alex Johnson"
                value={name}
                onChange={(e) => { setName(e.target.value); setError('') }}
                autoFocus
                maxLength={40}
              />
            </div>

            <div>
              <label className="block text-sm font-body text-surface-300 mb-1.5">Room ID</label>
              <input
                type="text"
                className="input-field font-mono tracking-wider"
                placeholder="e.g. abc-1234-xyz"
                value={roomId}
                onChange={(e) => { setRoomId(e.target.value); setError('') }}
                onKeyDown={(e) => e.key === 'Enter' && handleJoin(e)}
                maxLength={60}
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm font-body bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              onClick={handleJoin}
              className="btn-primary w-full text-base py-3.5 mt-2"
            >
              Join Room
              <ArrowIcon />
            </button>
          </div>

          <p className="text-center text-surface-300 text-sm font-body mt-4">
            Don't have a Room ID?{' '}
            <button onClick={() => navigate('/')} className="text-brand-400 hover:text-brand-300 transition-colors">
              Create a new meeting →
            </button>
          </p>
        </div>
      </main>
    </div>
  )
}
