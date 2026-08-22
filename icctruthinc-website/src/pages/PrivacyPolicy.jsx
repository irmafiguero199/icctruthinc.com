import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy | Icc Truth Inc | 501(c)(3) Nonprofit</title>
      <meta name="description" content="Privacy Policy of Icc Truth Inc, a 501(c)(3) nonprofit. EIN: 27-0377373. 21 Baker St, Churchville, NY 14428-9718." />
      <link rel="canonical" href="https://www.icctruthinc.com/privacy" />
    </Helmet>

    <div className="page-hero">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Privacy Policy</h2>
      <p className="text-slate-300 text-lg">How we protect your information</p>
    </div>

    <div className="container-main px-4 py-16 max-w-3xl">
      <div className="legal-box mb-8">
        <p className="text-slate-600 text-sm"><strong>Effective Date:</strong> August 22, 2026</p>
        <p className="text-slate-600 text-sm"><strong>Organization:</strong> Icc Truth Inc</p>
        <p className="text-slate-600 text-sm"><strong>EIN:</strong> 27-0377373</p>
        <p className="text-slate-600 text-sm"><strong>Address:</strong> 21 Baker St, Churchville, NY 14428-9718</p>
        <p className="text-slate-600 text-sm"><strong>Email:</strong> admin@icctruthinc.com</p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">1. Introduction</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Icc Truth Inc ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.icctruthinc.com" className="text-primary-700 hover:underline">www.icctruthinc.com</a> or interact with us.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We are a registered 501(c)(3) nonprofit organization located at 21 Baker St, Churchville, NY 14428-9718, with Federal EIN 27-0377373.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">2. Information We Collect</h3>
          <p className="text-slate-600 leading-relaxed mb-4">We may collect the following types of information:</p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2 ml-4">
            <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and payment information when you donate, volunteer, or contact us.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, operating system, referring URLs, and pages visited on our site.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze site traffic.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">3. How We Use Your Information</h3>
          <p className="text-slate-600 leading-relaxed mb-4">We use your information to:</p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2 ml-4">
            <li>Process donations and issue tax receipts</li>
            <li>Communicate with you about programs, events, and organizational updates</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Send newsletters and marketing communications (with your consent)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">4. Information Sharing</h3>
          <p className="text-slate-600 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, processing donations, or conducting our business, provided they agree to keep this information confidential. We may also disclose information when required by law.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">5. Data Security</h3>
          <p className="text-slate-600 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Donation transactions are processed through secure, PCI-compliant payment processors.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">6. Your Rights</h3>
          <p className="text-slate-600 leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2 ml-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">7. Contact Us</h3>
          <p className="text-slate-600 leading-relaxed">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-700"><strong>Icc Truth Inc</strong></p>
            <p className="text-slate-600">21 Baker St, Churchville, NY 14428-9718</p>
            <p className="text-slate-600">Email: <a href="mailto:admin@icctruthinc.com" className="text-primary-700 hover:underline">admin@icctruthinc.com</a></p>
            <p className="text-slate-600">Phone: <a href="tel:+15852433142" className="text-primary-700 hover:underline">(585) 243-3142</a></p>
            <p className="text-slate-600 text-sm mt-2">EIN: 27-0377373</p>
          </div>
        </section>
      </div>
    </div>
  </>
)

export default PrivacyPolicy
