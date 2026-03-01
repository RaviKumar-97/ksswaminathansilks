export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KS Swaminathan Silks",
    "url": "https://ksswaminathansilks.com",
    "logo": "https://ksswaminathansilks.com/logo.png",
    "description": "Premium Kanchipuram silk sarees with authentic traditional craftsmanship",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Tamil Nadu",
      "addressLocality": "Tamil Nadu"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99445-41985",
      "contactType": "customer service",
      "availableLanguage": ["English", "Tamil", "Hindi"]
    },
    "sameAs": [
      "https://www.instagram.com/ksswaminathansilks",
      "https://www.facebook.com/ksswaminathansilks"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KS Swaminathan Silks",
    "url": "https://ksswaminathansilks.com",
    "description": "Buy authentic Kanchipuram silk sarees online. Premium quality wedding and bridal silk sarees with traditional designs.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ksswaminathansilks.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}