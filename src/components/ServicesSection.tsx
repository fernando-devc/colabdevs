import { Code, Laptop, Users } from "lucide-react"
import { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-gray-100  w-full py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard
            icon={<Code className="text-green-500 w-16 h-16 mb-6" />}
            title="Desenvolvimento Web"
            description="Criamos websites responsivos e intuitivos que elevam a presença online da sua empresa."
          />
          <ServiceCard
            icon={<Laptop className="text-green-500 w-16 h-16 mb-6" />}
            title="Aplicativos Mobile"
            description="Desenvolvemos aplicativos móveis inovadores para iOS e Android que engajam seus usuários."
          />
          <ServiceCard
            icon={<Users className="text-green-500 w-16 h-16 mb-6" />}
            title="Consultoria em TI"
            description="Oferecemos consultoria especializada para otimizar seus processos e infraestrutura de TI."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
      {icon}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}