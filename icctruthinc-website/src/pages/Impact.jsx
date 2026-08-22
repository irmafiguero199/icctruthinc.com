import { Helmet } from 'react-helmet-async'
import { Quote } from 'lucide-react'

const Impact = () => {
  const stats = [
    { num: '2,400+', label: 'Community Members Served (2024)' },
    { num: '$380K', label: 'In Grants & Scholarships' },
    { num: '18', label: 'Active Programs' },
    { num: '92%', label: 'Program Satisfaction Rate' },
  ]

  const testimonials = [
    {
      quote: "The youth mentorship program changed my son's life. He went from struggling in math to earning honors recognition. The mentors at Icc Truth Inc truly care about each child's success.",
      name: 'Maria Rodriguez',
      role: 'Parent, Churchville, NY',
      initials: 'MR',
    },
    {
      quote: "Thanks to the adult literacy program, I earned my GED and secured a position at a local manufacturing firm. The staff never gave up on me, even when I wanted to give up on myself.",
      name: 'James Thompson',
      role: 'Program Graduate, 2023',
      initials: 'JT',
    },
    {
      quote: 'Our partnership with Icc Truth Inc has strengthened the entire Monroe County community. Their food security program alone serves 200 families monthly with dignity and respect.',
      name: 'Sarah Linwood',
      role: 'Director, Monroe Food Bank',
      initials: 'SL',
    },
  ]

  const partners = [
    'Churchville-Chili School District',
    'Monroe County Library System',
    'Rochester Area Community Foundation',
    'United Way of Greater Rochester',
    'Foodlink NY',
    'Monroe County Youth Bureau',
    'Churchville Lions Club',
    'Rochester Institute of Technology',
  ]

  return (
    <>
      <Helmet>
        <title>Our Impact | Icc Truth Inc | 501(c)(3) Nonprofit</title>
        <meta name="description" content="See the measurable impact of Icc Truth Inc in Monroe County. 2,400+ served, $380K in grants, 18 active programs. EIN: 27-0377373." />
        <link rel="canonical" href="https://www.icctruthinc.com/impact" />
      </Helmet>

      <div className="page-hero">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Our Impact</h2>
        <p className="text-slate-300 text-lg">Measurable outcomes and community transformation</p>
      </div>

      <div className="container-main px-4 py-16 max-w-5xl">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">{s.num}</div>
                <div className="text-sm text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-3xl font-bold text-navy-900 mb-10 font-serif text-center">Community Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-slate-200 rounded-2xl p-8 relative">
              <Quote className="w-10 h-10 text-slate-200 absolute top-6 right-6" />
              <p className="text-slate-700 italic leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-navy-800 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-navy-900 mb-10 font-serif text-center">Community Partners</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((p) => (
            <div key={p} className="bg-white border border-slate-200 rounded-xl px-6 py-3 text-sm font-semibold text-slate-600">
              {p}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Impact
