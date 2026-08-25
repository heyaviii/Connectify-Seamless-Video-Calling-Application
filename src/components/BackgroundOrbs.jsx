export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-bg absolute inset-0 opacity-100" />
    </div>
  )
}
