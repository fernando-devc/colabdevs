'use client'
import HeroPageRocket from "@/components/Heros/HeroPageRocket";
import Star from "@/components/Stars";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import localFont from 'next/font/local'
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Code, Laptop, Users, CheckCircle } from "lucide-react"
import Image from "next/image"

const FontArista = localFont({ src: '../components/fonts/Arista-Pro-Regular-trial.woff2' })


const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

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

export default function Home() {
  return (
    <div className="h-full   dark:bg-black bg-white flex items-center  flex-col relative">
      <div className=" h-screen top-0 bottom-0  overflow-hidden absolute z-0 w-full">
        {[...Array(200)].map((_, index) => (
          <Star key={index} size={Math.floor(Math.random() * 2) + 1} />
        ))}
      </div>
      <Header />
      <main className="z-10 w-full h-full flex justify-start items-start flex-col">
        <HeroPageRocket />
        <section className="w-full bg-green-500 h-14">
        </section>
        
        <section className="py-20 w-full  bg-white to-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Líder em soluções digitais inovadoras</h1>
              <p className="text-xl mb-6 text-gray-600">A Colab Devs é uma empresa de tecnologia sediada em Porto Velho, especializada no desenvolvimento de soluções inovadoras para plataformas web, mobile e outras tecnologias digitais. Com uma equipe altamente qualificada e comprometida, atuamos em diversos setores, oferecendo serviços personalizados para atender às necessidades de nossos clientes.</p>
            </div>
            <div className="md:w-1/2 relative ml-16">
              <div className="absolute inset-0 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
              <div className="relative">
                <Image
                  src="/colab.jpeg"
                  width={400}
                  height={400}
                  alt="Desenvolvimento de software"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="bg-gray-100  w-full py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                <Code className="text-green-500 w-16 h-16 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Desenvolvimento Web</h3>
                <p className="text-gray-600">Criamos websites responsivos e intuitivos que elevam a presença online da sua empresa.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                <Laptop className="text-green-500 w-16 h-16 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Aplicativos Mobile</h3>
                <p className="text-gray-600">Desenvolvemos aplicativos móveis inovadores para iOS e Android que engajam seus usuários.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                <Users className="text-green-500 w-16 h-16 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Consultoria em TI</h3>
                <p className="text-gray-600">Oferecemos consultoria especializada para otimizar seus processos e infraestrutura de TI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 w-full text-white py-24">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-4 leading-tight">Transformando Ideias em <span className="text-green-400">Realidade Digital</span></h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Soluções inovadoras para web, mobile e além. Impulsionando o futuro da tecnologia.</p>

            <Button className="bg-green-500 text-white hover:bg-green-600 text-lg py-6 px-8">
              Comece seu Projeto
            </Button>

          </div>
        </section>

        {/* Cases Section */}
        <section id="casos" className="py-20 bg-gray-100 w-full">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Cases de Sucesso</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <a href="https://www.hugfood.com.br/" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-8 rounded-lg shadow-lg flex transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hug Food</h3>
                    <p className="text-gray-600 mb-6">Aplicativo de delivery com integração de pagamento com a C88 Pay.</p>
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      <span className="font-medium">APP IOS / Android</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-24">
                    <Image
                      src="/hug.png"
                      alt="Hug Food Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </a>

              <a href="https://www.c88pay.com.br/" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-8 rounded-lg shadow-lg flex transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">C88 PAY</h3>
                    <p className="text-gray-600 mb-6">Site e Aplicativo de Soluções de Pagamento</p>
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      <span className="font-medium">Web & APP IOS / Android</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-24">
                    <Image
                      src="/c88.png"
                      alt="C88 PAY Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>


        {/* Contato */}
        <section id="contato" className="py-20 w-full bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Entre em Contato</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-6">
                <Input type="text" placeholder="Nome" className="w-full py-3" />
                <Input type="email" placeholder="E-mail" className="w-full py-3" />
                <Input type="tel" placeholder="Telefone" className="w-full py-3" />
                <Textarea placeholder="Mensagem" className="w-full py-3" rows={5} />
                <Button className="w-full bg-green-500 text-white hover:bg-green-600 py-4 text-lg font-semibold">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </section>



      {/* Empresas Parceiras */}
      <section className=" py-20 bg-gray-100 w-full">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Empresas que Confiam na Colab Devs</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* Logos das empresas parceiras */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/modena.png" alt="Logo Modena" className="w-40 h-20 object-contain mx-auto" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/fimca.png" alt="Logo IMCA" className="w-40 h-20 object-contain mx-auto" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/c88.png" alt="Logo C88" className="w-40 h-20 object-contain mx-auto" />
            </div>
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="container mx-auto text-center">

          <p className="mb-4">&copy; 2024 Colab Devs. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.youtube.com/@colabdevs743" className="text-gray-400 hover:text-green-600  transition-colors">Youtube</a>
            <a href="https://www.linkedin.com/in/colab-devs-7b41b3244/" className="text-gray-400 hover:text-green-600  transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/colabdevs/" className="text-gray-400 hover:text-green-600  transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
      </main>


    </div>
  );
}
