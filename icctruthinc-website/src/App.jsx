import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MissionVision from './pages/MissionVision.jsx'
import Programs from './pages/Programs.jsx'
import Impact from './pages/Impact.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import Donate from './pages/Donate.jsx'
import Gallery from './pages/Gallery.jsx'
import News from './pages/News.jsx'
import RegistrationInformation from './pages/RegistrationInformation.jsx'
import NotFound from './pages/NotFound.jsx'
import OrganizationSchema from './seo/OrganizationSchema.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <>
      <Helmet>
        <meta name="author" content="Icc Truth Inc" />
        <link rel="canonical" href="https://www.icctruthinc.com/" />
      </Helmet>
      <OrganizationSchema />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mission" element={<MissionVision />} />
          <Route path="programs" element={<Programs />} />
          <Route path="impact" element={<Impact />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="donate" element={<Donate />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="registration" element={<RegistrationInformation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
