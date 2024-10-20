'use client'

import { useEffect, useState } from "react"
import Star from "@/components/Stars"
import Header from "@/components/Header"
import HeroPageRocket from "@/components/Heros/HeroPageRocket"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import HeroSection from "@/components/HeroSection"
import CasesSection from "@/components/CasesSection"
import ContactSection from "@/components/ContactSection"
import PartnersSection from "@/components/PartnersSection"
import Footer from "@/components/Footer"
import BackToTopButton from "@/components/BackToTopButton"
import SpaceService from "@/components/space-services"


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="h-full dark:bg-black bg-white flex items-center flex-col relative">
      <div className="h-screen top-0 bottom-0 overflow-hidden absolute z-20 w-full ">
        {[...Array(100)].map((_, index) => (
          <Star key={index} size={Math.floor(Math.random() * 2) + 1} />
          
        ))}
      </div>
      <Header />
      <main className="z-10 w-full h-full flex justify-start items-start flex-col">
        <HeroPageRocket />
        <AboutSection />
        {/* <ServicesSection /> */}
        {/* <HeroSection /> */}
        <SpaceService/>
        <CasesSection />
        <ContactSection />
        <PartnersSection />
        <Footer />
        <BackToTopButton/>
      </main>
    </div>
  )
}