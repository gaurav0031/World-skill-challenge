import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "World Skill Challenge - Powered by AeroBay",
  description:
    "A National & International Skill Hunt for Young Innovators! Unleash Your Innovation. Ignite the Nation.",
  keywords:
    "competition, students, innovation, robotics, coding, entrepreneurship, aeromodelling, design thinking, gaming",
  authors: [{ name: "AeroBay" }],
  openGraph: {
    title: "World Skill Challenge - Powered by AeroBay",
    description: "A National & International Skill Hunt for Young Innovators!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Skill Challenge - Powered by AeroBay",
    description: "A National & International Skill Hunt for Young Innovators!",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
