import { Helmet } from 'react-helmet-async'
import { Calendar, Tag } from 'lucide-react'

const News = () => {
  const articles = [
    {
      tag: 'Programs',
      date: 'August 15, 2026',
      title: 'Digital Equity Program Reaches 500-Device Milestone',
      excerpt: 'Our technology access initiative has now distributed 500 refurbished laptops to families across Monroe County, with digital literacy training completion rates exceeding 85%.',
      icon: '📰',
    },
    {
      tag: 'Events',
      date: 'July 28, 2026',
      title: 'Annual Unity Festival Draws Record 1,200 Attendees',
      excerpt: 'The 2026 Unity Festival at Churchville Park brought together diverse communities for a day of cultural performances, food, and dialogue, marking our largest event to date.',
      icon: '📰',
    },
    {
      tag: 'Awards',
      date: 'June 10, 2026',
      title: 'Icc Truth Inc Receives $100K Community Foundation Grant',
      excerpt: 'The Rochester Area Community Foundation has awarded a three-year grant to expand our adult literacy and workforce development programs into rural Monroe County.',
      icon: '📰',
    },
    {
      tag: 'Education',
      date: 'May 22, 2026',
      title: '2026 Scholarship Recipients Announced',
      excerpt: 'Twelve graduating seniors from Monroe County high schools received Icc Truth Inc scholarships totaling $28,000 for post-secondary education in the fall semester.',
      icon: '📰',
    },
    {
      tag: 'Partnerships',
      date: 'April 8, 2026',
      title: 'New Partnership with RIT Expands STEM Mentorship',
      excerpt: 'Rochester Institute of Technology students will now serve as weekly mentors in our youth STEM program, bringing cutting-edge expertise to Churchville classrooms.',
      icon: '📰',
    },
    {
      tag: 'Community',
      date: 'March 14, 2026',
      title: 'Spring Food Drive Exceeds Goal by 40%',
      excerpt: 'Community members donated over 3,500 pounds of food during our annual spring drive, ensuring summer support for 200+ families in the Churchville area.',
      icon: '📰',
    },
  ]

  return (
    <>
      <Helmet>
        <title>News & Updates | Icc Truth Inc | 501(c)(3) Nonprofit</title>
        <meta name="description" content="Latest news and updates from Icc Truth Inc, a 501(c)(3) nonprofit serving Monroe County, NY. EIN: 27-0377373." />
        <link rel="canonical" href="https://www.icctruthinc.com/news" />
      </Helmet>

      <div className="page-hero">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">News & Updates</h2>
        <p className="text-slate-300 text-lg">Latest stories from Icc Truth Inc</p>
      </div>

      <div className="container-main px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article key={a.title} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="h-44 bg-gradient-to-br from-navy-800 to-primary-700 flex items-center justify-center text-5xl">
                {a.icon}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-slate-500">
                  <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium text-xs flex items-center gap-1">
                    <Tag className="w-3 h-3" />{a.tag}
                  </span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{a.date}</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2 leading-snug">{a.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export default News
