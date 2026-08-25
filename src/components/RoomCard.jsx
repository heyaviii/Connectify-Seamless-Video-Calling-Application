import { useClipboard } from '../hooks/useClipboard'

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const LinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

export default function RoomCard({ roomId }) {
  const { copied: copiedId, copy: copyId } = useClipboard()
  const { copied: copiedLink, copy: copyLink } = useClipboard()

  const roomLink = `${window.location.origin}/room/${roomId}`

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-green-400 relative">
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        </div>
        <span className="text-xs font-mono text-surface-300 uppercase tracking-widest">Room Created</span>
      </div>

      {/* Room ID */}
      <div>
        <label className="text-xs text-surface-300 font-body mb-1.5 block">Room ID</label>
        <div className="flex items-center gap-2">
          <code className="flex-1 bg-surface-800/80 border border-white/8 rounded-lg px-4 py-2.5 text-brand-300 font-mono text-sm tracking-wider">
            {roomId}
          </code>
          <button
            onClick={() => copyId(roomId)}
            className="btn-ghost p-2.5 rounded-lg border border-white/8 hover:border-brand-800/60"
            title="Copy Room ID"
          >
            {copiedId ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </div>

      {/* Room Link */}
      <div>
        <label className="text-xs text-surface-300 font-body mb-1.5 block">Invite Link</label>
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-surface-800/80 border border-white/8 rounded-lg px-3 py-2.5">
            <LinkIcon />
            <span className="text-surface-300 text-xs font-mono truncate">{roomLink}</span>
          </div>
          <button
            onClick={() => copyLink(roomLink)}
            className="btn-ghost p-2.5 rounded-lg border border-white/8 hover:border-brand-800/60"
            title="Copy Invite Link"
          >
            {copiedLink ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </div>

      <p className="text-xs text-surface-300 font-body pt-1">
        Share this link with others to invite them to your meeting.
      </p>
    </div>
  )
}
