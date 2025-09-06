import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Om India - Total Packaging Solutions | Industrial Wooden Packaging & ISPM-15 Treatment",
  description: "Leading provider of industrial packaging solutions including seaworthy wooden boxes, ISPM-15 treatments, VCI packing, wooden pallets, and export packaging. Serving 150+ clients with premium packaging services since 2009.",
  keywords: [
    // Primary packaging keywords
    "industrial packaging solutions",
    "wooden packaging",
    "seaworthy wooden boxes",
    "ISPM-15 treatment",
    "wooden pallets",
    "export packaging",

    // Specific services
    "VCI packing",
    "aluminum foil vacuum packing",
    "wooden crates",
    "plywood boxes",
    "heavy machinery packaging",
    "fumigation treatment",
    "heat treatment",

    // Location-based
    "packaging solutions Pune",
    "wooden packaging Maharashtra",
    "industrial packaging India",

    // Industry-specific
    "automotive packaging",
    "machinery export packaging",
    "corrosion protection packaging",
    "lashing and choking",

    // Business-focused
    "custom packaging solutions",
    "packaging manufacturer",
    "total packaging solutions",
    "Om India packaging"
  ].join(", "),

  authors: [{ name: "Om India Total Packaging Solutions" }],
  creator: "Om India Total Packaging Solutions",
  publisher: "Om India Total Packaging Solutions",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://omindiagroups.com",
    siteName: "Om India Total Packaging Solutions",
    title: "Om India - Leading Industrial Packaging Solutions Provider",
    description: "Professional wooden packaging, ISPM-15 treatments, and industrial packaging solutions. 16+ years experience serving global clients with premium packaging services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Om India Total Packaging Solutions - Industrial Packaging",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Om India - Total Packaging Solutions",
    description: "Leading provider of industrial packaging solutions including wooden boxes, pallets, and ISPM-15 treatments.",
    images: ["/twitter-image.jpg"],
    creator: "@OmIndiapackaging",
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  category: "Industrial Packaging",

  other: {
    "application-name": "Om India Total Packaging Solutions",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Maharashtra" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Om India Total Packaging Solutions",
              "alternateName": ["Om India Groups", "Om India Packaging"],
              "description": "Leading provider of industrial packaging solutions including wooden boxes, ISPM-15 treatments, VCI packing, and wooden pallets for export and domestic markets.",
              "url": "https://omindiagroups.com",
              "logo": "https://omindiagroups.com/logo.png",
              "image": "https://omindiagroups.com/og-image.jpg",
              "foundingDate": "2009",
              "slogan": "Total Packaging Solutions",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9923142533",
                  "contactType": "Customer Service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi", "Marathi"],
                  "hoursAvailable": "Mo-Su 00:00-23:59"
                },
                {
                  "@type": "ContactPoint",
                  "email": "info@omindiagroups.com",
                  "contactType": "General Inquiries"
                },
                {
                  "@type": "ContactPoint",
                  "email": "hr@omindiagroups.com",
                  "contactType": "Human Resources"
                }
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "name": "Registered Office",
                  "streetAddress": "C7/13, HDFC Colony, Telco Road, Shahu Nagar, Chinchwad",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411019",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "name": "Main Office",
                  "streetAddress": "Kasturi Business Centre, Gat No-33, Opp. Jeena Logistics, Chakan-Talegaon Road, Mahalunge Ingle, Chakan",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "410501",
                  "addressCountry": "IN"
                }
              ],
              "sameAs": [
                "https://linkedin.com/company/Om India-packaging",
                "https://facebook.com/Om Indiapackaging",
                "https://instagram.com/Om Indiapackaging",
                "https://twitter.com/Om Indiapackaging",
                "https://youtube.com/Om Indiapackaging"
              ],
              "numberOfEmployees": "100+",
              "taxID": "27AJNPG0303H1ZG",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "18.5204",
                  "longitude": "73.8567"
                },
                "geoRadius": "50000"
              },
              "serviceArea": ["India", "Global"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Industrial Packaging Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Seaworthy Wooden Box Packaging",
                      "description": "Marine-grade wooden boxes for international shipping"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ISPM-15 Heat Treatment",
                      "description": "Certified heat treatment services for wooden packaging"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VCI Packing Services",
                      "description": "Volatile Corrosion Inhibitor packaging for metal protection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wooden Pallets",
                      "description": "Two-way, four-way, and heavy-duty wooden pallets"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Om India Total Packaging Solutions",
              "alternateName": "Om India Groups",
              "url": "https://omindiagroups.com",
              "description": "Leading provider of industrial packaging solutions including wooden boxes, ISPM-15 treatments, VCI packing, and wooden pallets for export and domestic markets.",
              "inLanguage": "en-IN",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://omindiagroups.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Om India Total Packaging Solutions",
                "logo": "https://omindiagroups.com/logo.png"
              }
            })
          }}
        />

        {/* Breadcrumb Schema for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://omindiagroups.com",
                  "description": "Om India Total Packaging Solutions - Industrial packaging services"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Packaging Solutions",
                  "item": "https://omindiagroups.com/solutions",
                  "description": "Comprehensive range of wooden packaging, ISPM-15 treatments, and industrial solutions"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Career Opportunities",
                  "item": "https://omindiagroups.com/careers",
                  "description": "Join our team - Job opportunities and professional growth at Om India"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact Us",
                  "item": "https://omindiagroups.com/contact",
                  "description": "Get in touch for quotes, inquiries, and packaging solutions"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "About Us",
                  "item": "https://omindiagroups.com/about",
                  "description": "Learn about Om India's 16+ years of packaging excellence and leadership"
                }
              ]
            })
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Om India Total Packaging Solutions",
              "image": "https://omindiagroups.com/logo.png",
              "telephone": "+91-9923142533",
              "email": "info@omindiagroups.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C7/13, HDFC Colony, Telco Road, Shahu Nagar, Chinchwad",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411019",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5204,
                "longitude": 73.8567
              },
              "url": "https://omindiagroups.com",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Industrial Packaging Solutions",
              "serviceType": "Packaging Services",
              "description": "Comprehensive industrial packaging solutions including wooden packaging, ISPM-15 treatments, VCI packing, and custom packaging for export and domestic markets.",
              "provider": {
                "@type": "Organization",
                "name": "Om India Total Packaging Solutions",
                "url": "https://omindiagroups.com"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Packaging Solutions Catalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Seaworthy Wooden Box Packaging",
                      "category": "Wooden Packaging"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Industrial Heavy Machinery Packaging",
                      "category": "Heavy Machinery Packaging"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ISPM-15 Heat Treatment",
                      "category": "Treatment Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VCI Packing Services",
                      "category": "Specialized Packaging"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>

      <body className={montserrat.variable}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}