import Image from "next/image"
import localFont from 'next/font/local'
const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' })

export default function AboutSection() {
  return (
    <section className={`py-20 w-full bg-white to-white ${FontArista.className}`}>
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
  )
}