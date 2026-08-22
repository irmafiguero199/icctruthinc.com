import { Helmet } from 'react-helmet-async'

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Icc Truth Inc",
    "alternateName": "Icc Truth",
    "url": "https://www.icctruthinc.com",
    "logo": "https://www.icctruthinc.com/logo.svg",
    "email": "admin@icctruthinc.com",
    "telephone": "+1-585-243-3142",
    "taxID": "27-0377373",
    "foundingDate": "2009",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "21 Baker St",
      "addressLocality": "Churchville",
      "addressRegion": "NY",
      "postalCode": "14428-9718",
      "addressCountry": "US"
    },
    "description": "Icc Truth Inc is a registered 501(c)(3) nonprofit organization dedicated to education, community outreach, and cultural exchange in Churchville, NY and Monroe County.",
    "areaServed": {
      "@type": "Place",
      "name": "Monroe County, New York"
    },
    "sameAs": [
      "https://www.facebook.com/icctruthinc",
      "https://www.twitter.com/icctruthinc",
      "https://www.instagram.com/icctruthinc",
      "https://www.linkedin.com/company/icctruthinc"
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default OrganizationSchema
