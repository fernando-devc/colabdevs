import Image from "next/image";
import localFont from 'next/font/local';

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

export default function AboutSection() {
  return (
    <section className={`py-20 w-full bg-customGreen ${FontArista.className}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 text-white">
            Líder em soluções digitais inovadoras
          </h1>
          <p className="text-lg md:text-xl mb-4 text-white">
            A Colab Devs é uma empresa de tecnologia sediada em Porto Velho, especializada no desenvolvimento de soluções inovadoras para plataformas web, mobile e outras tecnologias digitais. Com uma equipe altamente qualificada e comprometida, atuamos em diversos setores, oferecendo serviços personalizados para atender às necessidades de nossos clientes.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="absolute hidden md:block -right-10 lg:right-20 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 w-48 h-48 md:w-64 md:h-64"></div>
          <div className="relative">
            <Image
              src="/colab.jpeg"
              width={400}
              height={400}
              alt="Desenvolvimento de software"
              className="rounded-lg shadow-2xl object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}