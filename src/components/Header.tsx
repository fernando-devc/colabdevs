'use client'

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import localFont from 'next/font/local'
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' })

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="py-2 w-full  mx-auto px-5 lg:justify-start justify-center flex z-10 ">
      <nav className="flex container mx-auto items-center">
        <div>
          {
            theme !== 'dark' ?
              <img src='/logo-light-horizontar.png' alt="logo" className="lg:h-32 h-24  " />
              :
              <img src='/logo-dark-horizontar.png' alt="logo" className="lg:h-32 h-24  " />
          }
        </div>
        <div className="flex-1" />
        <div className="md:flex lg:flex hidden gap-5 items-center">
          <Button color='success' variant="ghost" className={(FontArista.className) + " dark:text-white hover:text-green-500 text-xl"}>Sobre</Button>
          <Button color='success' variant="ghost" className={(FontArista.className) + " dark:text-white hover:text-green-500 text-xl"}>Blog</Button>
          <Button color='success' variant="ghost" className={(FontArista.className) + " dark:text-white hover:text-green-500 text-xl"}>Portfolio</Button>
          <Button color='success' variant="ghost" className={(FontArista.className) + " dark:text-white hover:text-green-500 text-xl"}>Contato</Button>
        </div>
        <div className="flex gap-5 items-center ml-5">
          <ThemeSwitcher />
          <Button variant="ghost" />
        </div>
      </nav>
    </header>
  )
}