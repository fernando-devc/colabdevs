import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import localFont from 'next/font/local';
const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

export default function ContactSection() {
  return (
    <section id="contato" className={`py-16 md:py-20 w-full bg-white ${FontArista.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16">Entre em Contato</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <Input type="text" placeholder="Nome" className={`w-full py-3 px-4 ${FontArista.className}`} />
            <Input type="email" placeholder="E-mail" className={`w-full py-3 px-4 ${FontArista.className}`} />
            <Input type="tel" placeholder="Telefone" className={`w-full py-3 px-4 ${FontArista.className}`} />
            <Textarea placeholder="Mensagem" className={`w-full py-3 px-4 ${FontArista.className}`} rows={5} />
            <Button className={`w-full bg-green-500 text-white hover:bg-green-600 py-3 md:py-4 text-base md:text-lg font-semibold ${FontArista.className}`}>
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}