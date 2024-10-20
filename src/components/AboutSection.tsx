import Image from "next/image";
import localFont from 'next/font/local';

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

export default function AboutSection() {
  return (
    <section id="about" className={`-m-[1px] py-24 w-full bg-white dark:bg-black relative ${FontArista.className}`}>
      <img src='/Smoke.svg' className='absolute top-0  w-full z-0  transform rotate-180' />
      <div className="container mx-auto px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-1/2 mb-14 md:mb-0 flex flex-col items-center md:items-start px-6 md:px-8 mt-8 md:mt-12">
          <h1 className="text-4xl z-10 md:text-5xl font-bold mb-10 md:mb-12 text-gray-800 dark:text-white text-center md:text-left">
            Líder em soluções digitais inovadoras
          </h1>
          <p className="text-xl mb-10 md:mb-12 text-gray-600 dark:text-gray-300 text-center md:text-left">
            A Colab Devs é uma empresa de tecnologia sediada em Porto Velho, especializada no desenvolvimento
            de soluções inovadoras para plataformas web, mobile e outras tecnologias digitais.
            Com uma equipe altamente qualificada e comprometida, atuamos em diversos setores, oferecendo serviços
            personalizados para atender às necessidades de nossos clientes.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative px-6 md:px-8">
          <div className="absolute md:hidden -top-10 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 w-[300px] h-[300px]"></div>
          <div className="absolute hidden md:block -top-20 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 w-[500px] h-[500px]"></div>
          <div className="relative z-10">
            <Image
              src="/colablogo.png"
              width={400}
              height={400}
              alt="Desenvolvimento de software"
              className="rounded-full shadow-2xl object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}