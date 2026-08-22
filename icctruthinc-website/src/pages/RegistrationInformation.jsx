import { Helmet } from 'react-helmet-async'
import { AlertTriangle, FileText, Users, Building, MapPin, Shield, ExternalLink } from 'lucide-react'

const RegistrationInformation = () => (
  <>
    <Helmet>
      <title>Registration Information | Icc Truth Inc | 501(c)(3) Verification</title>
      <meta name="description" content="Official nonprofit registration information for Icc Truth Inc. Federal EIN: 27-0377373. IRS 501(c)(3) status. 21 Baker St, Churchville, NY 14428-9718." />
      <link rel="canonical" href="https://www.icctruthinc.com/registration" />
    </Helmet>

    <div className="page-hero">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Registration Information</h2>
      <p className="text-slate-300 text-lg">Official nonprofit documentation and verification</p>
    </div>

    <div className="container-main px-4 py-16 max-w-4xl">
      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-10">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-red-900 mb-2">Critical Verification Information</h4>
            <p className="text-red-800 text-sm leading-relaxed">
              This page contains the official registration and tax-exempt status information for Icc Truth Inc as required by Google Workspace for Nonprofits verification, grant applications, and donor due diligence.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold text-navy-900 font-serif">Federal Tax Information</h3>
          </div>
          <div className="legal-box">
            <p><strong>Legal Name:</strong> Icc Truth Inc</p>
            <p><strong>Federal EIN (Tax ID):</strong> 27-0377373</p>
            <p><strong>IRS Status:</strong> 501(c)(3) Public Charity</p>
            <p><strong>IRS Determination Date:</strong> 2011</p>
            <p><strong>Deductibility Status:</strong> Contributions are tax-deductible under IRC Section 170</p>
            <p className="flex items-center gap-2">
              <strong>IRS Verification:</strong>
              <a href="https://www.irs.gov/charities-non-profits/tax-exempt-organization-search" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline flex items-center gap-1">
                Search IRS EO Select Check <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Building className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold text-navy-900 font-serif">State Registration</h3>
          </div>
          <div className="legal-box">
            <p><strong>State of Incorporation:</strong> New York</p>
            <p><strong>NY State Entity Status:</strong> Active / In Good Standing</p>
            <p><strong>Date of Incorporation:</strong> 2009</p>
            <p><strong>Registered Agent:</strong> Icc Truth Inc, 21 Baker St, Churchville, NY 14428-9718</p>
            <p><strong>NY Charities Registration:</strong> Registered with NY Attorney General Charities Bureau</p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold text-navy-900 font-serif">Registered Address</h3>
          </div>
          <div className="legal-box">
            <p className="font-medium text-navy-900">Icc Truth Inc</p>
            <p>21 Baker St</p>
            <p>Churchville, NY 14428-9718</p>
            <p>United States</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:admin@icctruthinc.com" className="text-primary-700 hover:underline">admin@icctruthinc.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+15852433142" className="text-primary-700 hover:underline">(585) 243-3142</a></p>
            <p><strong>Website:</strong> <a href="https://www.icctruthinc.com" className="text-primary-700 hover:underline">www.icctruthinc.com</a></p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold text-navy-900 font-serif">Governance</h3>
          </div>
          <div className="legal-box">
            <p><strong>Board President:</strong> Dr. William Davidson</p>
            <p><strong>Executive Director:</strong> Michael Kowalski</p>
            <p><strong>Board Members:</strong> 6 (including officers)</p>
            <p><strong>Board Meeting Schedule:</strong> Quarterly (third Thursday)</p>
            <p><strong>Annual Meeting:</strong> Held each November</p>
            <p><strong>Board Term Length:</strong> 3 years, renewable once</p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold text-navy-900 font-serif">Financial Transparency</h3>
          </div>
          <div className="legal-box">
            <p><strong>Annual Reports:</strong> Available upon request via email to <a href="mailto:admin@icctruthinc.com" className="text-primary-700 hover:underline">admin@icctruthinc.com</a></p>
            <p><strong>Form 990:</strong> Filed annually with the IRS. Copies available upon request.</p>
            <p><strong>Audit Status:</strong> Annual independent financial review conducted by licensed CPA.</p>
            <p><strong>Program Expense Ratio:</strong> 85%+ of annual expenditures directed to program services.</p>
            <p className="mt-3 text-sm text-slate-500">
              Icc Truth Inc is committed to full financial transparency. Donors and stakeholders may request copies of our Form 990, annual report, or audited financial statements by contacting our office.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold text-navy-900 font-serif">Donation Deductibility</h3>
          </div>
          <div className="legal-box">
            <p className="font-medium text-navy-900 mb-2">
              All donations to Icc Truth Inc are tax-deductible to the fullest extent allowed by United States law.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Icc Truth Inc is classified by the Internal Revenue Service as a 501(c)(3) public charity. Donors will receive an official acknowledgment letter for tax purposes for all contributions of $250 or more, or upon request for smaller donations. Our EIN (27-0377373) should be used for tax filing purposes.
            </p>
          </div>
        </section>
      </div>
    </div>
  </>
)

export default RegistrationInformation
