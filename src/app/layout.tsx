import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://andrea-travels.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aindrila Bhowmik — Travel & Lifestyle",
    template: "%s | Aindrila Bhowmik",
  },
  description:
    "Travel enthusiast, MBA from NIT Trichy, Business Team Lead at Accenture. Exploring the world one destination at a time. 25K+ Instagram followers.",
  keywords: [
    "Aindrila Bhowmik",
    "travel blogger",
    "travel influencer",
    "lifestyle",
    "Bangalore",
    "India travel",
    "Singapore",
    "Malaysia",
    "Goa",
    "NIT Trichy",
    "Accenture",
    "travel content creator",
    "Instagram influencer",
    "aindrila_bhowmik",
  ],
  authors: [{ name: "Aindrila Bhowmik" }],
  creator: "Aindrila Bhowmik",
  publisher: "Aindrila Bhowmik",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Aindrila Bhowmik",
    title: "Aindrila Bhowmik — Travel & Lifestyle",
    description:
      "Team Lead by Profession, Influencer by Passion. Travel content creator with 25K+ followers, MBA from NIT Trichy, based in Bangalore.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aindrila Bhowmik — Travel & Lifestyle",
    description:
      "Team Lead by Profession, Influencer by Passion. Travel content creator with 25K+ followers, based in Bangalore.",
    creator: "@aindrila_bhowmik",
  },
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
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aindrila Bhowmik",
  url: siteUrl,
  image: `${siteUrl}/images/0cdf9a49-8ba6-4711-8532-e8b12343e0cc.png`,
  jobTitle: "Business Team Lead",
  worksFor: {
    "@type": "Organization",
    name: "Accenture",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "NIT Trichy",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/aindrila_bhowmik/"],
  description:
    "Travel enthusiast, MBA from NIT Trichy, Business Team Lead at Accenture. Exploring the world one destination at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
