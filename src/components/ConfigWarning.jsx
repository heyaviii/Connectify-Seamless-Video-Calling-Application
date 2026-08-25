export default function ConfigWarning() {
  return (
    <div className="mx-auto max-w-2xl px-4 mb-6">
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex gap-3">
        <span className="text-amber-400 text-xl flex-shrink-0">⚠️</span>
        <div>
          <p className="text-amber-300 font-display font-semibold text-sm mb-1">
            ZegoCloud credentials not configured
          </p>
          <p className="text-amber-400/80 text-xs font-body leading-relaxed">
            To enable real video calling, add your{' '}
            <code className="bg-amber-500/20 px-1 rounded">VITE_ZEGO_APP_ID</code> and{' '}
            <code className="bg-amber-500/20 px-1 rounded">VITE_ZEGO_SERVER_SECRET</code>{' '}
            to a <code className="bg-amber-500/20 px-1 rounded">.env</code> file.{' '}
            <a
              href="https://console.zegocloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-300 transition-colors"
            >
              Get free credentials →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
