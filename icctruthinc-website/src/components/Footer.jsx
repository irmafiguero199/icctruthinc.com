import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Shield } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="container-main px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <h4 className="text-white font-serif text-2xl font-bold mb-4">Icc Truth Inc</h4>
            <p className="text-sm leading-relaxed mb-4">
              Empowering communities through truth, education, and service. A registered 501(c)(3) nonprofit organization serving Churchville and Monroe County, New York since 2009.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-900/30 text-primary-400 px-4 py-2 rounded-lg text-sm font-medium">
              <Shield className="w-4 h-4" />
              EIN: 27-0377373
            </div>
          </div>

          <div>
            <h5 className="text-white text-sm uppercase tracking-wider font-semibold mb-5">Organization</h5>
            <div className="space-y-3">
              <Link to="/about" className="block text-sm hover:text-white transition-colors">About Us</Link>
              <Link to="/mission" className="block text-sm hover:text-white transition-colors">Mission & Vision</Link>
              <Link to="/programs" className="block text-sm hover:text-white transition-colors">Our Programs</Link>
              <Link to="/impact" className="block text-sm hover:text-white transition-colors">Impact</Link>
              <Link to="/team" className="block text-sm hover:text-white transition-colors">Team & Board</Link>
              <Link to="/news" className="block text-sm hover:text-white transition-colors">News</Link>
            </div>
          </div>

          <div>
            <h5 className="text-white text-sm uppercase tracking-wider font-semibold mb-5">Legal</h5>
            <div className="space-y-3">
              <Link to="/registration" className="block text-sm hover:text-white transition-colors">Registration Info</Link>
              <Link to="/privacy" className="block text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-sm hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/donate" className="block text-sm hover:text-white transition-colors">Donate</Link>
              <Link to="/contact" className="block text-sm hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h5 className="text-white text-sm uppercase tracking-wider font-semibold mb-5">Contact</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <p className="text-sm">
                  Icc Truth Inc<br />
                  21 Baker St<br />
                  Churchville, NY 14428-9718<br />
                  United States
                </p>
              </div>
              <a href="mailto:info@icctruthinc.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                info@icctruthinc.com
              </a>
              <a href="tel:+15852433142" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                (585) 243-3142
              </a>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com/icctruthinc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.twitter.com/icctruthinc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/icctruthinc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/icctruthinc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Icc Truth Inc. All rights reserved. 501(c)(3) Nonprofit Organization.</p>
          <p className="text-slate-500">EIN: 27-0377373 | 21 Baker St, Churchville, NY 14428-9718</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
