import { Helmet } from 'react-helmet-async'

const About = () => {
  const milestones = [
    { year: '2009', title: 'Foundation', desc: 'Icc Truth Inc established in Churchville, NY with initial focus on youth tutoring and community resource sharing.' },
    { year: '2011', title: 'IRS 501(c)(3) Determination', desc: 'Received official 501(c)(3) tax-exempt status from the Internal Revenue Service, enabling tax-deductible donations.' },
    { year: '2013', title: 'Program Expansion', desc: 'Launched adult literacy and workforce development programs in partnership with Monroe County libraries.' },
    { year: '2016', title: 'Cultural Exchange Initiative', desc: 'Introduced intercultural dialogue series and heritage celebration events, reaching over 500 participants in first year.' },
    { year: '2019', title: 'Strategic Growth', desc: 'Expanded service area to include all of Monroe County; awarded first major community grant ($75,000).' },
    { year: '2024', title: 'Digital Access Program', desc: 'Launched technology literacy and digital equity initiative, distributing 200+ devices to underserved families.' },
  ]

  const values = [
    { icon: '🎯', title: 'Integrity', desc: 'We operate with complete transparency in our governance, finances, and program delivery.' },
    { icon: '🤝', title: 'Inclusivity', desc: 'We serve all community members regardless of background, belief, or circumstance.' },
    { icon: '📚', title: 'Education', desc: 'We believe knowledge and skills development are pathways to individual and community empowerment.' },
    { icon: '🌱', title: 'Sustainability', desc: 'We build programs designed for long-term community benefit and organizational resilience.' },
  ]

  return (
    <>
      <Helmet>
        <title>About Us | Icc Truth Inc | 501(c)(3) Nonprofit</title>
        <meta name="description" content="Learn about Icc Truth Inc, our history, values, and commitment to the Churchville community. Founded in 2009. EIN: 27-0377373." />
        <link rel="canonical" href="https://www.icctruthinc.com/about" />
      </Helmet>

      <div className="page-hero">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">About Icc Truth Inc</h2>
        <p className="text-slate-300 text-lg">Our history, values, and commitment to the Churchville community</p>
      </div>

      <div className="container-main px-4 py-16 max-w-4xl">
        <h3 className="text-3xl font-bold text-navy-900 mb-6 font-serif">Our Story</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          Icc Truth Inc was founded in 2009 by a group of dedicated community leaders in Churchville, New York, who recognized the need for comprehensive educational and community support services in Monroe County. What began as a small volunteer initiative has grown into a robust nonprofit organization serving thousands of community members annually.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Our name reflects our core belief: that truth—through education, transparency, and honest community engagement—is the foundation of positive social change. For over fifteen years, we have remained committed to this principle, adapting our programs to meet evolving community needs while maintaining our foundational values.
        </p>

        <div className="info-box">
          <h4 className="font-bold text-navy-900 mb-3">Legal Information</h4>
          <p className="text-slate-600"><strong>Legal Name:</strong> Icc Truth Inc</p>
          <p className="text-slate-600"><strong>Federal EIN:</strong> 27-0377373</p>
          <p className="text-slate-600"><strong>IRS Status:</strong> 501(c)(3) Public Charity</p>
          <p className="text-slate-600"><strong>State of Incorporation:</strong> New York</p>
          <p className="text-slate-600"><strong>Year Founded:</strong> 2009</p>
          <p className="text-slate-600"><strong>Physical Address:</strong> 21 Baker St, Churchville, NY 14428-9718</p>
        </div>

        <h3 className="text-3xl font-bold text-navy-900 mb-8 mt-16 font-serif">Organizational Timeline</h3>
        <div className="relative pl-8 border-l-2 border-slate-200 space-y-10">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-sm" />
              <div className="text-sm font-semibold text-primary-700 mb-1">{m.year}</div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">{m.title}</h4>
              <p className="text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-navy-900 mb-8 mt-16 font-serif">Our Core Values</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="text-2xl mb-3">{v.icon}</div>
              <h5 className="text-lg font-bold text-navy-900 mb-2">{v.title}</h5>
              <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
