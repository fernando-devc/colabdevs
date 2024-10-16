import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 w-full text-white py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 leading-tight">Transformando Ideias em <span className="text-green-400">Realidade Digital</span></h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Soluções inovadoras para web, mobile e além. Impulsionando o futuro da tecnologia.</p>
        <Button className="bg-green-500 text-white hover:bg-green-600 text-lg py-6 px-8">
          Comece seu Projeto
        </Button>
      </div>
    </section>
  )
}