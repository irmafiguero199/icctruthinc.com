import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Phone, MapPin, Shield } from 'lucide-react'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/mission', label: 'Mission' },
    { path: '/programs', label: 'Programs' },
    { path: '/impact', label: 'Impact' },
    { path: '/team', label: 'Team' },
    { path: '/news', label: 'News' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-navy-950 text-slate-400 text-sm py-2">
        <div className="container-main px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-primary-500" />
              EIN: 87-0974521 | 501(c)(3)
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              5731 70th Pl, Lubbock, TX 79424-1819
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:admin@vernonmaden.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">admin@vernonmaden.com</span>
            </a>
            <a href="tel:+15852433142" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">(585) 243-3142</span>
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-slate-200">
        <div className="container-main px-4 flex justify-between items-center h-[72px]">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-navy-800 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-lg font-serif">
              VM
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-900 leading-tight font-serif">Vernon Maden</h1>
              <span className="text-xs text-slate-500 tracking-wider uppercase">Registered 501(c)(3)</span>
            </div>
          </Link>

          <button 
            className="lg:hidden p-2 text-navy-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className={`lg:flex gap-1 ${mobileOpen ? 'absolute top-[72px] left-0 right-0 bg-white border-b border-slate-200 p-4 flex flex-col shadow-lg' : 'hidden lg:flex'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary-700 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-primary-700 text-white hover:bg-primary-800 transition-colors"
            >
              Donate
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
