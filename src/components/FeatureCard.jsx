export default function FeatureCard({ icon, title, description, accent = false }) {
  return (
    <div className={`card p-6 group hover:scale-[1.02] transition-all duration-300 ${accent ? 'border-brand-800/40' : ''}`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl
        ${accent ? 'bg-brand-600/20 border border-brand-600/30' : 'bg-white/5 border border-white/8'}`}>
        {icon}
      </div>
      <h3 className="font-display font-semibold text-white text-lg mb-2">{title}</h3>
      <p className="text-surface-300 text-sm leading-relaxed font-body">{description}</p>
    </div>
  )
}
