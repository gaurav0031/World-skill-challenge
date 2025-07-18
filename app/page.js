"use client"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Categories from "./components/Categories"
import Stages from "./components/Stages"
import Pricing from "./components/Pricing"
import Registration from "./components/Registration"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Stages />
      <Pricing />
      <Registration />
      <Contact />
    </div>
  )
}
