import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, CreditCard, Mail, Building2, TrendingUp, Gift } from 'lucide-react'

const Donate = () => {
  const [amount, setAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')

  const presetAmounts = [25, 50, 100, 250]

  const selectAmount = (amt) => {
    setAmount(amt)
    setCustomAmount('')
  }

  return (
    <>
      <Helmet>
        <title>Donate | Icc Truth Inc | Tax-Deductible 501(c)(3)</title>
        <meta name="description" content="Make a tax-deductible donation to Icc Truth Inc, a registered 501(c)(3) nonprofit. EIN: 27-0377373. All donations are tax-deductible." />
        <link rel="canonical" href="https://www.icctruthinc.com/donate" />
      </Helmet>

      <div className="page-hero">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Support Our Mission</h2>
        <p className="text-slate-300 text-lg">Your donation makes a direct impact in Monroe County</p>
      </div>

      <div className="container-main px-4 py-16 max-w-2xl">
        <div className="bg-primary-50 border-2 border-primary-600 rounded-2xl p-6 text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Shield className="w-4 h-4" />
            Tax-Deductible Donation
          </div>
          <p className="text-navy-900 font-medium mb-1">Icc Truth Inc is a registered 501(c)(3) nonprofit organization.</p>
          <p className="text-slate-600 text-sm mb-1">Federal EIN: 27-0377373</p>
          <p className="text-slate-600 text-sm">All donations are tax-deductible to the fullest extent allowed by law.</p>
          <p className="text-slate-500 text-xs mt-2">21 Baker St, Churchville, NY 14428-9718</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10">
          <h4 className="text-xl font-bold text-navy-900 text-center mb-2">Make a Donation</h4>
          <p className="text-slate-500 text-sm text-center mb-6">Select an amount or enter a custom donation</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => selectAmount(amt)}
                className={`py-4 rounded-xl font-semibold text-navy-900 border-2 transition-all ${
                  amount === amt
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-slate-100 bg-slate-50 hover:border-primary-300'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-navy-900 mb-2">Custom Amount ($)</label>
            <input
              type="number"
              min="1"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setAmount(null) }}
              placeholder="Enter custom amount"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-navy-900 mb-2">Donation Frequency</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors bg-white">
              <option>One-Time Gift</option>
              <option>Monthly Recurring</option>
              <option>Quarterly Recurring</option>
              <option>Annual Recurring</option>
            </select>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">Full Name *</label>
              <input type="text" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors" placeholder="Your name for tax receipt" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">Email Address *</label>
              <input type="email" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors" placeholder="For donation receipt" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors" placeholder="(555) 123-4567" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">Dedication / In Honor Of (Optional)</label>
              <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary-600 transition-colors" placeholder="In memory of... or in honor of..." />
            </div>
          </div>

          <button
            onClick={() => alert('This is a demonstration interface. In production, this would connect to a secure payment processor. Please contact admin@icctruthinc.com to process your donation.')}
            className="w-full py-4 bg-gradient-to-r from-navy-800 to-primary-700 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <CreditCard className="w-5 h-5" />
            Proceed to Secure Payment
          </button>
          <p className="text-xs text-slate-500 text-center mt-4">Your information is secure. You will receive an email confirmation and tax receipt.</p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <h4 className="text-lg font-bold text-navy-900 mb-6">Other Ways to Give</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-navy-900 text-sm">Check</p>
                <p className="text-slate-600 text-sm">Mail checks payable to "Icc Truth Inc" to 21 Baker St, Churchville, NY 14428-9718. Include your email for receipt.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-navy-900 text-sm">Employer Matching</p>
                <p className="text-slate-600 text-sm">Many employers match charitable donations. Contact your HR department and provide our EIN: 27-0377373.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-navy-900 text-sm">Stock Transfer</p>
                <p className="text-slate-600 text-sm">Contact admin@icctruthinc.com for instructions on transferring appreciated securities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Gift className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-navy-900 text-sm">Planned Giving</p>
                <p className="text-slate-600 text-sm">Include Icc Truth Inc in your estate planning. Contact us for sample bequest language.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Donate
