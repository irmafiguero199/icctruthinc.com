import { Helmet } from 'react-helmet-async'

const TermsOfService = () => (
  <>
    <Helmet>
      <title>Terms of Service | Icc Truth Inc | 501(c)(3) Nonprofit</title>
      <meta name="description" content="Terms of Service for Icc Truth Inc website. EIN: 27-0377373. 21 Baker St, Churchville, NY 14428-9718." />
      <link rel="canonical" href="https://www.icctruthinc.com/terms" />
    </Helmet>

    <div className="page-hero">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Terms of Service</h2>
      <p className="text-slate-300 text-lg">Agreement for using our website and services</p>
    </div>

    <div className="container-main px-4 py-16 max-w-3xl">
      <div className="legal-box mb-8">
        <p className="text-slate-600 text-sm"><strong>Effective Date:</strong> August 22, 2026</p>
        <p className="text-slate-600 text-sm"><strong>Organization:</strong> Icc Truth Inc</p>
        <p className="text-slate-600 text-sm"><strong>EIN:</strong> 27-0377373</p>
        <p className="text-slate-600 text-sm"><strong>Address:</strong> 21 Baker St, Churchville, NY 14428-9718</p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">1. Agreement to Terms</h3>
          <p className="text-slate-600 leading-relaxed">
            By accessing or using the website of Icc Truth Inc ("we," "our," or "us") at <a href="https://www.icctruthinc.com" className="text-primary-700 hover:underline">www.icctruthinc.com</a>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">2. Organization Information</h3>
          <p className="text-slate-600 leading-relaxed">
            Icc Truth Inc is a registered 501(c)(3) nonprofit organization incorporated in the State of New York. Our Federal Employer Identification Number (EIN) is 27-0377373. Our principal place of business is located at 21 Baker St, Churchville, NY 14428-9718. Our contact email is <a href="mailto:admin@icctruthinc.com" className="text-primary-700 hover:underline">admin@icctruthinc.com</a>.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">3. Use of Website</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            You may use our website for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2 ml-4">
            <li>Use the site in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any portion of the site</li>
            <li>Use the site to transmit harmful code or malware</li>
            <li>Interfere with the proper working of the site</li>
            <li>Impersonate any person or entity</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">4. Donations</h3>
          <p className="text-slate-600 leading-relaxed">
            All donations made through our website are voluntary and non-refundable. Donations to Icc Truth Inc are tax-deductible to the fullest extent permitted by law for U.S. taxpayers. You will receive an acknowledgment letter for tax purposes. We reserve the right to refuse donations from sources that conflict with our mission or values.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">5. Intellectual Property</h3>
          <p className="text-slate-600 leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of Icc Truth Inc or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">6. Disclaimer of Warranties</h3>
          <p className="text-slate-600 leading-relaxed">
            Our website is provided on an "as is" and "as available" basis. Icc Truth Inc makes no warranties, expressed or implied, regarding the operation or availability of the site, or the accuracy, reliability, or completeness of any content.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">7. Limitation of Liability</h3>
          <p className="text-slate-600 leading-relaxed">
            To the fullest extent permitted by law, Icc Truth Inc shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the website.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">8. Governing Law</h3>
          <p className="text-slate-600 leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Monroe County, New York.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">9. Changes to Terms</h3>
          <p className="text-slate-600 leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website following any changes constitutes acceptance of those changes.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-navy-900 mb-4">10. Contact Information</h3>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
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

export default TermsOfService
