import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-gradient-to-br from-navy-800 to-primary-700 text-white py-20 px-4">
      <div className="container-main max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-6 text-primary-400" />
        <h3 className="text-3xl font-bold mb-4 font-serif">Stay Connected</h3>
        <p className="text-slate-300 mb-8">
          Subscribe to our newsletter for updates on programs, events, and impact stories from Icc Truth Inc.
        </p>
        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <p className="text-lg font-medium">Thank you for subscribing!</p>
            <p className="text-slate-300 text-sm mt-2">You'll hear from us soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-xl text-navy-900 outline-none focus:ring-2 focus:ring-primary-400"
            />
            <button type="submit" className="px-7 py-3.5 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-950 transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-slate-400 mt-6">
          Icc Truth Inc | EIN: 27-0377373 | 21 Baker St, Churchville, NY 14428-9718
        </p>
      </div>
    </section>
  )
}

export default Newsletter
