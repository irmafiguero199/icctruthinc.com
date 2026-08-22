const SectionHeader = ({ title, subtitle, light = false }) => (
  <div className={`text-center mb-16 ${light ? 'text-white' : ''}`}>
    <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
    {subtitle && (
      <p className={`text-lg max-w-xl mx-auto ${light ? 'text-slate-300' : 'text-slate-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
)

export default SectionHeader
