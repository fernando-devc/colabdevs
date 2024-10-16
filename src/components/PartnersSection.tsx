import localFont from 'next/font/local'

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' })

interface PartnerLogoProps {
    src: string;
    alt: string;
  }
  
  export default function PartnersSection() {
    return (
    <section className={`py-20 bg-gray-100 w-full ${FontArista.className}`}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Empresas que Confiam na Colab Devs</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <PartnerLogo src="/modena.png" alt="Logo Modena" />
            <PartnerLogo src="/fimca.png" alt="Logo IMCA" />
            <PartnerLogo src="/c88.png" alt="Logo C88" />
          </div>
        </div>
      </section>
    )
  }
  
  function PartnerLogo({ src, alt }: PartnerLogoProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src={src} alt={alt} className="w-40 h-20 object-contain mx-auto" />
      </div>
    )
  }