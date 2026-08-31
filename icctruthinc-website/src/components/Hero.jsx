import { Link } from 'react-router-dom'
import { Shield, ArrowRight, BookOpen } from 'lucide-react'

const Hero = () => (
  <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-700 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />
    <div className="container-main px-4 py-24 md:py-32 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-sm font-medium mb-8">
        <Shield className="w-4 h-4 text-primary-400" />
        Registered 501(c)(3) | EIN: 87-0974521
      </div>
      <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto font-serif">
        Empowering Communities Through Truth, Education & Service
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Vernon Maden is a nonprofit organization dedicated to fostering educational excellence, community development, and intercultural understanding in Lubbock and the greater Texas region.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/programs" className="btn-primary">
          <BookOpen className="w-5 h-5" />
          Our Programs
        </Link>
        <Link to="/about" className="btn-outline">
          Learn More
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
        {[
          { num: '15+', label: 'Years of Service' },
          { num: '2,400+', label: 'Lives Impacted' },
          { num: '$380K', label: 'In Community Grants' },
          { num: '18', label: 'Active Programs' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl md:text-4xl font-bold mb-1">{stat.num}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Hero
