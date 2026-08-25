import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BackgroundOrbs from '../components/BackgroundOrbs'
import FeatureCard from '../components/FeatureCard'
import RoomCard from '../components/RoomCard'
import { generateRoomId } from '../utils/roomUtils'

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

const features = [
  {
    icon: '⚡',
    title: 'Instant Room Generation',
    description: 'Create a meeting room in one click. No sign-up, no setup — just a unique room ID ready to share.',
    accent: true,
  },
  {
    icon: '🔗',
    title: 'Peer-to-Peer Connectivity',
    description: 'WebRTC-powered direct connections for lowest possible latency between participants.',
  },
  {
    icon: '🎥',
    title: 'HD Video Streaming',
    description: 'Crystal-clear HD video with adaptive quality that adjusts to your network conditions.',
  },
  {
    icon: '🎙️',
    title: 'Real-Time Audio',
    description: 'Studio-quality audio with noise suppression and echo cancellation built-in.',
  },
  {
    icon: '🔒',
    title: 'Secure Connections',
    description: 'End-to-end encrypted streams via DTLS/SRTP protocols. Your conversations stay private.',
  },
  {
    icon: '📱',
    title: 'Cross-Platform',
    description: 'Works seamlessly in any modern browser — desktop or mobile. No app download required.',
  },
]

export default function Home() {
  const navigate = useNavigate()
  const [newRoomId, setNewRoomId] = useState(null)
  const [isCreating, setIsCreating] = useState(false)

  const handleCreateRoom = () => {
    setIsCreating(true)
    setTimeout(() => {
      const id = generateRoomId()
      setNewRoomId(id)
      setIsCreating(false)
    }, 600)
  }

  const handleJoinCreatedRoom = () => {
    if (newRoomId) navigate(`/room/${newRoomId}`)
  }

  return (
    <div className="min-h-screen relative">
      <BackgroundOrbs />
      <Navbar />

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center page-enter">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-950/80 border border-brand-800/60 rounded-full px-4 py-1.5 mb-8 text-brand-300 text-sm font-body">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow" />
              WebRTC · ZegoCloud · Real-Time
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              Video calls,{' '}
              <span className="gradient-text">seamlessly</span>
              <br />
              connected
            </h1>

            <p className="text-surface-300 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto mb-12">
              Instant HD video meetings with no friction. Create a room, share the link, and start connecting — powered by WebRTC for sub-second setup.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCreateRoom}
                disabled={isCreating}
                className="btn-primary text-base px-8 py-4 animate-glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isCreating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <PlusIcon />
                    Create a Meeting
                  </>
                )}
              </button>
              <button
                onClick={() => navigate('/join')}
                className="btn-secondary text-base px-8 py-4"
              >
                Join with Code
                <ArrowIcon />
              </button>
            </div>

            {/* Room created card */}
            {newRoomId && (
              <div className="mt-8 max-w-md mx-auto page-enter">
                <RoomCard roomId={newRoomId} />
                <button
                  onClick={handleJoinCreatedRoom}
                  className="btn-primary w-full mt-3 text-base py-3.5"
                >
                  Join This Room
                  <ArrowIcon />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Stats bar */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel px-8 py-6 grid grid-cols-3 gap-6 text-center">
              {[
                { value: '< 1s', label: 'Connection Setup' },
                { value: 'HD', label: 'Video Quality' },
                { value: 'E2E', label: 'Encrypted' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-2xl md:text-3xl gradient-text">{value}</div>
                  <div className="text-surface-300 text-sm font-body mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
                Everything you need
              </h2>
              <p className="text-surface-300 font-body">
                Built with modern real-time architecture for reliable, low-latency communication.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/8 px-6 py-8">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white">Connectify</span>
              <span className="text-surface-300 text-sm font-body">— Seamless Video Calling</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-surface-300 font-body">
              <span>React.js</span>
              <span>·</span>
              <span>Vite</span>
              <span>·</span>
              <span>WebRTC</span>
              <span>·</span>
              <span>ZegoCloud</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
