import { Helmet } from 'react-helmet-async'
import { BookOpen, Briefcase, Apple, Globe, Monitor, GraduationCap, Clock, MapPin, Users } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Youth Education & Mentorship',
      desc: 'Our flagship program provides after-school academic support, one-on-one mentoring, and enrichment activities for students in grades K-12. Operating at the Churchville community center and partner school sites, this program addresses achievement gaps in literacy and mathematics while fostering social-emotional development. Students receive homework assistance, STEM exploration workshops, and college preparation counseling.',
      meta: ['Ages 5-18', 'Churchville, NY', 'Mon-Fri, 3:00-6:00 PM'],
    },
    {
      icon: Briefcase,
      title: 'Adult Literacy & Workforce Development',
      desc: 'Designed for adults seeking to improve their reading, writing, and digital skills, this program offers free classes, GED preparation, and job readiness training. Participants receive individualized learning plans, career counseling, and connections to local employers. Since 2013, over 400 adults have completed the program, with 68% achieving employment or educational advancement within six months.',
      meta: ['Adults 18+', 'Monroe County', 'Tue & Thu, 6:00-8:30 PM'],
    },
    {
      icon: Apple,
      title: 'Community Food Security & Nutrition',
      desc: 'This initiative operates a monthly food distribution program, nutrition education workshops, and emergency food assistance for families experiencing hardship. We partner with regional food banks and local farms to provide fresh, nutritious options. The program also includes cooking classes and SNAP enrollment assistance.',
      meta: ['Open to All', 'Churchville & Surrounding', '2nd & 4th Saturdays'],
    },
    {
      icon: Globe,
      title: 'Intercultural Exchange & Dialogue',
      desc: "Through heritage celebrations, dialogue circles, and arts programming, this program fosters understanding and connection among Monroe County's diverse communities. Annual events include the Unity Festival, international film series, and youth cultural ambassadors program. We partner with faith communities, cultural associations, and educational institutions to ensure broad representation.",
      meta: ['All Ages', 'Monroe County', 'Monthly Events'],
    },
    {
      icon: Monitor,
      title: 'Digital Equity & Technology Access',
      desc: 'Launched in 2024, this program addresses the digital divide by providing refurbished devices, internet subsidy navigation, and technology literacy training. Participants learn essential computer skills, online safety, and digital communication tools. The program has distributed over 200 laptops and connected 150 families to affordable internet options.',
      meta: ['Families & Seniors', 'Monroe County', 'By Appointment'],
    },
    {
      icon: GraduationCap,
      title: 'Scholarship & Higher Education Support',
      desc: 'Icc Truth Inc administers annual scholarships for graduating high school seniors pursuing post-secondary education. Awards range from $1,000 to $5,000 based on academic achievement, community service, and financial need. The program also includes FAFSA assistance, college application workshops, and campus visit coordination.',
      meta: ['High School Seniors', 'Monroe County', 'Application: Jan-Mar'],
    },
  ]

  return (
    <>
      <Helmet>
        <title>Our Programs | Icc Truth Inc | 501(c)(3) Nonprofit</title>
        <meta name="description" content="Explore Icc Truth Inc programs: youth education, adult literacy, food security, cultural exchange, digital equity, and scholarships. EIN: 27-0377373." />
        <link rel="canonical" href="https://www.icctruthinc.com/programs" />
      </Helmet>

      <div className="page-hero">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Our Programs</h2>
        <p className="text-slate-300 text-lg">Comprehensive services designed to meet community needs</p>
      </div>

      <div className="container-main px-4 py-16 max-w-5xl">
        <div className="space-y-8">
          {programs.map((p) => (
            <div key={p.title} className="bg-white border border-slate-200 rounded-2xl p-8 grid md:grid-cols-[auto_1fr] gap-6 items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-800 to-primary-700 rounded-2xl flex items-center justify-center text-white shrink-0">
                <p.icon className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-navy-900 mb-3">{p.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {p.meta.map((m) => (
                    <span key={m} className="inline-flex items-center gap-1.5 text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                      {m.includes('Age') || m.includes('All') ? <Users className="w-3.5 h-3.5" /> : 
                       m.includes('PM') || m.includes('Appointment') ? <Clock className="w-3.5 h-3.5" /> : 
                       <MapPin className="w-3.5 h-3.5" />}
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Programs
