import { Helmet } from 'react-helmet-async'
import { Calendar, MapPin } from 'lucide-react'

const Gallery = () => {
  const events = [
    { emoji: '🎉', title: '2026 Unity Festival', location: 'Churchville Park', date: 'August 2026' },
    { emoji: '🔬', title: 'Youth STEM Workshop', location: 'Community Center', date: 'July 2026' },
    { emoji: '🍎', title: 'Spring Food Distribution', location: 'Churchville Fire Hall', date: 'April 2026' },
    { emoji: '🎓', title: 'Adult Literacy Graduation', location: 'Monroe County Library', date: 'June 2026' },
    { emoji: '💻', title: 'Digital Device Distribution', location: 'Community Center', date: 'May 2026' },
    { emoji: '🤝', title: "Intercultural Dialogue Circle", location: "St. John's Church Hall", date: 'March 2026' },
  ]

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Icc Truth Inc | 501(c)(3) Nonprofit</title>
        <meta name="description" content="View photos from Icc Truth Inc events and programs in Churchville, NY and Monroe County. EIN: 27-0377373." />
        <link rel="canonical" href="https://www.icctruthinc.com/gallery" />
      </Helmet>

      <div className="page-hero">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Photo Gallery</h2>
        <p className="text-slate-300 text-lg">Moments from our programs and events</p>
      </div>

      <div className="container-main px-4 py-16 max-w-5xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="group aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden cursor-pointer">
              <span className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">{e.emoji}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold text-lg mb-1">{e.title}</h4>
                <div className="flex items-center gap-4 text-slate-300 text-sm">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{e.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{e.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
