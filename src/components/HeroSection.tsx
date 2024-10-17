import { Button } from "@/components/ui/button";
import localFont from 'next/font/local';
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

export default function HeroSection() {
  const scrollToElement = useSmoothScroll();

  const handleProjectClick = () => {
    scrollToElement('contact');
  };

  return (
    <section className={`bg-black w-full text-white py-16 md:py-24 ${FontArista.className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Transformando Ideias em <span className="text-green-400">Realidade Digital</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Soluções inovadoras para web, mobile e além. Impulsionando o futuro da tecnologia.
        </p>
        <Button 
          className="bg-green-500 text-white hover:bg-green-600 text-lg py-6 px-8" 
          onClick={handleProjectClick}
        >
          Comece seu Projeto
        </Button>
      </div>
    </section>
  );
}