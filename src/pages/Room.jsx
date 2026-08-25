import { useEffect, useRef, useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { ZEGO_CONFIG, isZegoConfigured } from '../utils/zegoConfig'
import Navbar from '../components/Navbar'
import BackgroundOrbs from '../components/BackgroundOrbs'
import ConfigWarning from '../components/ConfigWarning'
import RoomCard from '../components/RoomCard'
import { useClipboard } from '../hooks/useClipboard'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function Room() {
  const { roomId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const zegoRef = useRef(null)
  const [status, setStatus] = useState('connecting') // connecting | ready | error
  const [errorMsg, setErrorMsg] = useState('')
  const { copied, copy } = useClipboard()

  const userName = searchParams.get('name') || `Guest_${Math.floor(Math.random() * 9999)}`
  const userID = `user_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`

  useEffect(() => {
    if (!roomId) {
      navigate('/404')
      return
    }

    if (!isZegoConfigured()) {
      setStatus('unconfigured')
      return
    }

    let destroyed = false

    const initZego = async () => {
      try {
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          ZEGO_CONFIG.appID,
          ZEGO_CONFIG.serverSecret,
          roomId,
          userID,
          userName
        )

        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zegoRef.current = zc

        if (destroyed) return

        zc.joinRoom({
          container: containerRef.current,
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
          showScreenSharingButton: true,
          showTurnOffRemoteCameraButton: true,
          showTurnOffRemoteMicrophoneButton: true,
          showRemoveUserButton: false,
          onJoinRoom: () => setStatus('ready'),
          onLeaveRoom: () => navigate('/'),
          onUserLeave: () => {},
        })

        setStatus('ready')
      } catch (err) {
        console.error('ZegoCloud init error:', err)
        if (!destroyed) {
          setStatus('error')
          setErrorMsg(err?.message || 'Failed to connect. Check your ZegoCloud credentials.')
        }
      }
    }

    initZego()

    return () => {
      destroyed = true
      try {
        zegoRef.current?.destroy?.()
      } catch {}
    }
  }, [roomId])

  // ---- Unconfigured demo view ----
  if (status === 'unconfigured') {
    return (
      <div className="min-h-screen relative">
        <BackgroundOrbs />
        <Navbar />
        <main className="relative z-10 pt-28 pb-16 px-6">
          <div className="max-w-xl mx-auto page-enter">
            <ConfigWarning />

            <div className="card p-8 text-center mb-6">
              <div className="text-5xl mb-4">🎥</div>
              <h2 className="font-display font-bold text-2xl text-white mb-2">Room Ready</h2>
              <p className="text-surface-300 font-body text-sm leading-relaxed mb-6">
                Your room <code className="text-brand-300 font-mono bg-brand-950/60 px-2 py-0.5 rounded">{roomId}</code> is set up. Configure your ZegoCloud credentials to start a live video call.
              </p>

              <div className="space-y-3 text-left bg-surface-800/40 rounded-xl p-4 text-sm font-mono text-surface-200 mb-6">
                <p className="text-surface-300 text-xs font-body mb-2">📄 Create <strong>.env</strong> in project root:</p>
                <p><span className="text-brand-400">VITE_ZEGO_APP_ID</span>=<span className="text-green-400">your_app_id_here</span></p>
                <p><span className="text-brand-400">VITE_ZEGO_SERVER_SECRET</span>=<span className="text-green-400">your_server_secret_here</span></p>
              </div>

              <a
                href="https://console.zegocloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex mb-3 w-full justify-center"
              >
                Get Free ZegoCloud Credentials
                <ArrowIcon />
              </a>
            </div>

            <RoomCard roomId={roomId} />

            <button onClick={() => navigate('/')} className="btn-ghost w-full justify-center mt-4 text-sm">
              ← Back to Home
            </button>
          </div>
        </main>
      </div>
    )
  }

  // ---- Error view ----
  if (status === 'error') {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <BackgroundOrbs />
        <div className="relative z-10 text-center px-6 max-w-md page-enter">
          <div className="text-5xl mb-4">❌</div>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Connection Failed</h2>
          <p className="text-surface-300 font-body text-sm mb-6">{errorMsg}</p>
          <button onClick={() => navigate('/')} className="btn-primary">← Back to Home</button>
        </div>
      </div>
    )
  }

  // ---- Live video room ----
  return (
    <div className="min-h-screen relative bg-surface-950">
      <BackgroundOrbs />

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-3">
        <div className="glass-panel px-5 py-3 flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 relative">
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            </div>
            <span className="font-display font-semibold text-white text-sm">Connectify</span>
            <span className="text-surface-300 text-xs font-mono">/ {roomId}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => copy(`${window.location.origin}/room/${roomId}`)}
              className="btn-ghost text-xs py-1.5 px-3 border border-white/8 rounded-lg"
            >
              {copied ? '✓ Copied!' : '🔗 Copy Link'}
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-ghost text-xs py-1.5 px-3 text-red-400 hover:text-red-300 border border-red-500/20 hover:border-red-400/40 rounded-lg"
            >
              Leave
            </button>
          </div>
        </div>
      </div>

      {/* Video container */}
      <div className="pt-20 h-screen">
        {status === 'connecting' && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="spinner mx-auto mb-4" />
              <p className="text-surface-300 font-body text-sm">Connecting to room...</p>
            </div>
          </div>
        )}
        <div
          ref={containerRef}
          id="zego-root"
          className="w-full h-full"
          style={{ height: 'calc(100vh - 80px)' }}
        />
      </div>
    </div>
  )
}
