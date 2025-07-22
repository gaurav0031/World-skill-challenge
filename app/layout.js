import { Inter } from "next/font/google"
import "./globals.css"
import StructuredData from "./components/StructuredData"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "World Skill Challenge 2024 - Powered by AeroBay | National & International Competition",
  description:
    "Join the World Skill Challenge 2024! A National & International Skill Hunt for Young Innovators. Compete in Robotics, AI, Coding, Entrepreneurship, Aeromodelling & more. Register your school team now!",
  keywords:
    "world skill challenge, student competition, robotics competition, coding contest, AI competition, entrepreneurship challenge, aeromodelling, design thinking, school competition, AeroBay, innovation contest, STEM competition, national competition, international competition, student innovation",
  authors: [{ name: "AeroBay", url: "https://aerobay.com" }],
  creator: "AeroBay",
  publisher: "AeroBay",
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
    locale: "en_US",
    url: "https://world-skill-challenge.vercel.app",
    title: "World Skill Challenge 2024 - National & International Competition",
    description:
      "Join the World Skill Challenge 2024! A National & International Skill Hunt for Young Innovators. Compete in 6 exciting categories across India.",
    siteName: "World Skill Challenge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "World Skill Challenge 2024 - Powered by AeroBay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Skill Challenge 2024 - National & International Competition",
    description: "Join the World Skill Challenge 2024! A National & International Skill Hunt for Young Innovators.",
    images: ["/og-image.jpg"],
    creator: "@aerobay",
  },
  alternates: {
    canonical: "https://world-skill-challenge.vercel.app",
  },
  verification: {
    google: "RGvrLhpTgytQ7TOvecdB9H4scuJY1ZZwM-09HnY4AB0",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

