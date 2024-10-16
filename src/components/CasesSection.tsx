import Image from "next/image";
import { CheckCircle } from "lucide-react";
import localFont from 'next/font/local';
const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2', variable: '--font-arista' });

interface CaseCardProps {
  title: string;
  description: string;
  tech: string;
  imageUrl: string;
  link: string;
}

export default function CasesSection() {
  return (
    <section  id="cases" className={`py-16 bg-gray-100 w-full ${FontArista.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">Cases de Sucesso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <CaseCard
            title="Hug Food"
            description="Aplicativo de delivery com integração de pagamento com a C88 Pay."
            tech="APP IOS / Android"
            imageUrl="/hug.png"
            link="https://www.hugfood.com.br/"
          />
          <CaseCard
            title="C88 PAY"
            description="Site e Aplicativo de Soluções de Pagamento"
            tech="Web & APP IOS / Android"
            imageUrl="/c88.png"
            link="https://www.c88pay.com.br/"
          />
        </div>
      </div>
    </section>
  );
}

function CaseCard({ title, description, tech, imageUrl, link }: CaseCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row transition-transform hover:scale-105 cursor-pointer">
        <div className="flex-grow mb-4 md:mb-0">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 font-arista">{title}</h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 font-arista">{description}</p>
          <div className="flex items-center text-green-500 font-arista">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="text-sm md:text-base font-medium">{tech}</span>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end w-full md:w-24">
          <Image
            src={imageUrl}
            alt={`${title} Logo`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </a>
  );
}