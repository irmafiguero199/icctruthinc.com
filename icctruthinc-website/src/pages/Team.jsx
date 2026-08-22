import { Helmet } from 'react-helmet-async'
import { Calendar } from 'lucide-react'

const Team = () => {
  const board = [
    { initials: 'DW', name: 'Dr. William Davidson', role: 'President, Board of Directors', bio: 'Dr. Davidson is a retired educator with 35 years of experience in public school administration. He holds a Ph.D. in Educational Leadership from the University of Rochester and has served on the board since 2012.' },
    { initials: 'EP', name: 'Eleanor Patterson', role: 'Vice President', bio: 'Eleanor is a community organizer and small business owner who has lived in Churchville for over 20 years. She leads our community outreach initiatives and partnership development efforts.' },
    { initials: 'RC', name: 'Robert Chen', role: 'Treasurer', bio: "Robert is a CPA and financial advisor who oversees the organization's fiscal management and compliance. He ensures transparent financial reporting and adherence to 501(c)(3) regulations." },
    { initials: 'AM', name: 'Amanda Mitchell', role: 'Secretary', bio: 'Amanda is an attorney specializing in nonprofit law. She manages board records, corporate compliance, and governance documentation for Icc Truth Inc.' },
    { initials: 'JS', name: 'James Sullivan', role: 'Director at Large', bio: 'James is a technology executive who leads our digital equity initiatives and advises on organizational technology strategy and infrastructure.' },
    { initials: 'LG', name: 'Lisa Garcia', role: 'Director at Large', bio: 'Lisa is a social worker and licensed therapist who provides expertise on program design, mental health integration, and participant support services.' },
  ]

  const staff = [
    { initials: 'MK', name: 'Michael Kowalski', role: 'Executive Director', bio: 'Michael has led Icc Truth Inc since 2018, bringing 15 years of nonprofit management experience. He holds an MPA from Syracuse University and is responsible for overall organizational strategy and operations.' },
    { initials: 'TJ', name: 'Tasha Johnson', role: 'Director of Programs', bio: "Tasha oversees all program delivery, staff supervision, and outcome measurement. She has a Master's in Social Work and previously directed youth services at a regional community center." },
    { initials: 'DN', name: 'David Nguyen', role: 'Development & Communications Manager', bio: 'David manages fundraising, donor relations, marketing, and external communications. He joined the team in 2021 and has grown the annual fund by 45%.' },
    { initials: 'RB', name: 'Rebecca Brooks', role: 'Finance & Operations Coordinator', bio: 'Rebecca handles day-to-day financial operations, grant reporting, HR administration, and office management. She ensures smooth organizational functioning.' },
  ]

  return (
    <>
      <Helmet>
        <title>Our Team | Icc Truth Inc | 501(c)(3) Nonprofit</title>
        <meta name="description" content="Meet the Board of Directors and staff of Icc Truth Inc, a 501(c)(3) nonprofit serving Monroe County, NY. EIN: 27-0377373." />
        <link rel="canonical" href="https://www.icctruthinc.com/team" />
      </Helmet>

      <div className="page-hero">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Our Team</h2>
        <p className="text-slate-300 text-lg">Dedicated leaders guiding our mission</p>
      </div>

      <div className="container-main px-4 py-16 max-w-5xl">
        <h3 className="text-3xl font-bold text-navy-900 mb-4 font-serif">Board of Directors</h3>
        <p className="text-slate-600 mb-10 leading-relaxed">
          The Board of Directors of Icc Truth Inc meets quarterly to provide strategic oversight, fiscal stewardship, and governance leadership. Board members serve three-year terms and are elected by the membership at the annual meeting.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {board.map((b) => (
            <div key={b.name} className="card-hover text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-navy-800 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {b.initials}
              </div>
              <h4 className="text-lg font-bold text-navy-900">{b.name}</h4>
              <div className="text-primary-700 text-sm font-medium mb-3">{b.role}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{b.bio}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-navy-900 mb-6 font-serif">Executive Staff</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {staff.map((s) => (
            <div key={s.name} className="card-hover text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-navy-800 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {s.initials}
              </div>
              <h4 className="text-lg font-bold text-navy-900">{s.name}</h4>
              <div className="text-primary-700 text-sm font-medium mb-3">{s.role}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{s.bio}</p>
            </div>
          ))}
        </div>

        <div className="info-box">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-primary-600" />
            <h4 className="font-bold text-navy-900">Board Meeting Information</h4>
          </div>
          <p className="text-slate-600 leading-relaxed">
            The Board of Directors meets on the third Thursday of each quarter at 6:00 PM at the Icc Truth Inc Community Center, 21 Baker St, Churchville, NY 14428-9718. Meetings are open to the public with advance notice. Minutes are available upon request by emailing <a href="mailto:admin@icctruthinc.com" className="text-primary-700 hover:underline">admin@icctruthinc.com</a>.
          </p>
        </div>
      </div>
    </>
  )
}

export default Team
