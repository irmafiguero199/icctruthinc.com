import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

const NotFound = () => (
  <>
    <Helmet>
      <title>Page Not Found | Icc Truth Inc</title>
      <meta name="description" content="The page you are looking for does not exist. Return to Icc Truth Inc homepage." />
    </Helmet>

    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div>
        <div className="text-[120px] font-bold text-slate-200 leading-none mb-6">404</div>
        <h2 className="text-3xl font-bold text-navy-900 mb-4 font-serif">Page Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Please check the URL or return to our homepage.
        </p>
        <Link to="/" className="btn-primary bg-navy-900 text-white hover:bg-navy-950 inline-flex">
          <Home className="w-5 h-5" />
          Return to Homepage
        </Link>
        <div className="mt-10 text-xs text-slate-400">
          Icc Truth Inc | 501(c)(3) Nonprofit | EIN: 27-0377373<br />
          21 Baker St, Churchville, NY 14428-9718
        </div>
      </div>
    </div>
  </>
)

export default NotFound
