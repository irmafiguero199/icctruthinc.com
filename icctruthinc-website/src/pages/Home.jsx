import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { BookOpen, Globe, Heart, Users, ArrowRight } from 'lucide-react'

const Home = () => (
  <>
    <Helmet>
      <title>Icc Truth Inc | Registered 501(c)(3) Nonprofit | Churchville, NY</title>
      <meta name="description" content="Icc Truth Inc is a 501(c)(3) nonprofit serving Churchville, NY and Monroe County through education, community outreach, and cultural exchange. EIN: 27-0377373." />
      <link rel="canonical" href="https://www.icctruthinc.com/" />
    </Helmet>

    <Hero />

    <section className="bg-white border-y border-slate-200">
      <div className="container-main px-4 section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Founded in 2009, Icc Truth Inc exists to advance educational opportunities, promote civic engagement, and strengthen community bonds through truth-driven initiatives and inclusive programming.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We believe that every individual deserves access to quality education, mentorship, and resources that enable them to reach their full potential. Our work spans youth development, adult literacy, cultural exchange, and community outreach.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Serving Churchville, NY and surrounding Monroe County communities, we partner with local schools, libraries, and civic organizations to create lasting positive change.
            </p>
            <Link to="/mission" className="btn-primary bg-navy-900 text-white hover:bg-navy-950">
              Read Our Full Mission
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center">
            <Users className="w-32 h-32 text-slate-300" />
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding container-main">
      <SectionHeader 
        title="Our Core Programs" 
        subtitle="Comprehensive initiatives designed to serve our community's diverse needs" 
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: BookOpen, title: 'Youth Education & Mentorship', desc: 'After-school tutoring, STEM workshops, and one-on-one mentorship for students grades K-12 in Churchville and surrounding districts.' },
          { icon: Heart, title: 'Community Outreach', desc: 'Food security programs, resource fairs, and direct assistance to families in need throughout Monroe County.' },
          { icon: Globe, title: 'Cultural Exchange', desc: 'Intercultural dialogue events, heritage celebrations, and arts programming that bring diverse communities together.' },
        ].map((program) => (
          <div key={program.title} className="card-hover">
            <div className="w-14 h-14 bg-gradient-to-br from-navy-800 to-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <program.icon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-navy-900 mb-3">{program.title}</h4>
            <p className="text-slate-600 leading-relaxed">{program.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-navy-900 text-white py-16">
      <div className="container-main px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">2009</div>
            <div className="text-sm text-slate-400">Year Founded</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">2,400+</div>
            <div className="text-sm text-slate-400">Community Members Served</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">$380K</div>
            <div className="text-sm text-slate-400">Grants & Scholarships Awarded</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">45+</div>
            <div className="text-sm text-slate-400">Community Partners</div>
          </div>
        </div>
      </div>
    </section>

    <Newsletter />
  </>
)

export default Home
