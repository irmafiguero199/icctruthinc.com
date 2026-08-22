import { Helmet } from 'react-helmet-async'
import { Target, Eye, CheckCircle } from 'lucide-react'

const MissionVision = () => (
  <>
    <Helmet>
      <title>Mission & Vision | Icc Truth Inc | 501(c)(3) Nonprofit</title>
      <meta name="description" content="Read the mission and vision of Icc Truth Inc, a 501(c)(3) nonprofit serving Monroe County, NY. EIN: 27-0377373." />
      <link rel="canonical" href="https://www.icctruthinc.com/mission" />
    </Helmet>

    <div className="page-hero">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Mission & Vision</h2>
      <p className="text-slate-300 text-lg">Guiding our work today and shaping our path forward</p>
    </div>

    <div className="container-main px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-8 h-8 text-primary-600" />
          <h3 className="text-3xl font-bold text-navy-900 font-serif">Mission Statement</h3>
        </div>
        <p className="text-lg text-navy-800 italic border-l-4 border-primary-600 pl-6 py-2 leading-relaxed">
          Icc Truth Inc advances educational equity, community resilience, and intercultural understanding through evidence-based programs, strategic partnerships, and dedicated volunteer engagement in Monroe County, New York.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="w-8 h-8 text-primary-600" />
          <h3 className="text-3xl font-bold text-navy-900 font-serif">Vision Statement</h3>
        </div>
        <p className="text-slate-600 leading-relaxed">
          We envision a Monroe County where every resident has access to quality educational resources, meaningful community connections, and opportunities for personal growth regardless of socioeconomic status. By 2030, Icc Truth Inc will be the leading community-based nonprofit in the region, recognized for innovative programming, measurable impact, and inclusive practices.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-navy-900 mb-6 font-serif">Strategic Objectives (2026-2030)</h3>
        <div className="space-y-4">
          {[
            'Educational Access: Serve 5,000+ youth and adults annually through tutoring, mentorship, and workforce development by 2030.',
            'Community Health: Reduce food insecurity among program participants by 40% through expanded resource distribution and nutrition education.',
            'Cultural Bridge-Building: Facilitate 50+ intercultural events annually, engaging 3,000+ participants from diverse backgrounds.',
            'Organizational Capacity: Grow annual operating budget to $1.2M while maintaining 85%+ program-to-overhead ratio.',
            'Digital Equity: Ensure 500+ families have access to reliable technology and digital literacy training by 2028.',
          ].map((obj, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="info-box">
        <h4 className="font-bold text-navy-900 mb-2">Nonprofit Verification</h4>
        <p className="text-slate-600 leading-relaxed">
          Icc Truth Inc is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law. Our Federal Employer Identification Number (EIN) is <strong>27-0377373</strong>. For verification, you may contact the IRS Exempt Organizations Division or search our status on the IRS Tax Exempt Organization Search tool. Our registered address is 21 Baker St, Churchville, NY 14428-9718.
        </p>
      </div>
    </div>
  </>
)

export default MissionVision
