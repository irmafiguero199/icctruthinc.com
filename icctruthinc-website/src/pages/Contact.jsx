import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Phone, Globe, Clock, Send, Shield } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Icc Truth Inc | 501(c)(3) Nonprofit</title>
        <meta name="description" content="Contact Icc Truth Inc at 21 Baker St, Churchville, NY 14428-9718. Email: info@icctruthinc.com | Phone: (585) 243-3142. EIN: 27-0377373." />
        <link rel="canonical" href="https://www.icctruthinc.com/contact" />
      </Helmet>

      <div className="page-hero">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Contact Us</h2>
        <p className="text-slate-300 text-lg">We'd love to hear from you</p>
      </div>

      <div className="container-main px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xl font-bold text-navy-900 mb-6">Get in Touch</h4>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-navy-900 mb-1">Physical Address</h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Icc Truth Inc<br />
                  21 Baker St<br />
                  Churchville, NY 14428-9718<br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-navy-900 mb-1">Email</h5>
                <a href="mailto:info@icctruthinc.com" className="text-slate-600 text-sm hover:text-primary-700 transition-colors">
                  info@icctruthinc.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-navy-900 mb-1">Telephone</h5>
                <a href="tel:+15852433142" className="text-slate-600 text-sm hover:text-primary-700 transition-colors">
                  (585) 243-3142
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-navy-900 mb-1">Website</h5>
                <a href="https://www.icctruthinc.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 text-sm hover:text-primary-700 transition-colors">
                  www.icctruthinc.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-navy-900 mb-1">Office Hours</h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="info-box !my-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary-600" />
                <h4 className="font-bold text-navy-900">Nonprofit Information</h4>
              </div>
              <p className="text-slate-600 text-sm">EIN: 27-0377373</p>
              <p className="text-slate-600 text-sm">IRS Status: 501(c)(3) Public Charity</p>
              <p className="text-slate-600 text-sm">New York State Entity</p>
              <p className="text-slate-600 text-sm">Incorporated: 2009</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900 mb-2">Thank You!</h4>
                  <p className="text-slate-600">We will respond within 2 business days.</p>
                </div>
              ) : (
                <>
                  <h4 className="text-xl font-bold text-navy-900 mb-6">Send a Message</h4>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-2">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-2">Email Address *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">Subject *</label>
                      <select name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors bg-white">
                        <option value="">Select a subject</option>
                        <option>General Inquiry</option>
                        <option>Program Information</option>
                        <option>Volunteer Opportunities</option>
                        <option>Donation Questions</option>
                        <option>Partnership Proposal</option>
                        <option>Media Request</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">Message *</label>
                      <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors resize-y" placeholder="How can we help you?" />
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-navy-800 to-primary-700 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    <p className="text-xs text-slate-500 text-center">This form is for inquiries only. For donations, please visit our Donate page.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
