import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import localFont from 'next/font/local';
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast"; 
import WhatsAppButton from "@/components/WhatsAppButton"; 

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });

export default function ContactSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const { toast } = useToast(); // Initialize toast

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
      telephone: telefone,
    };

    emailjs.send(
      'service_cukyouu',
      'template_5tyragf',
      templateParams,
      '0R7OBJiFH5RP3k_f0'
    ).then(() => {
      // Clear input fields
      setNome('');
      setEmail('');
      setTelefone('');
      setMensagem('');

      toast({
        title: "Mensagem Enviada!",
        description: "Sua mensagem foi enviada com sucesso. Logo entraremos em Contato com você!",
      });
    }).catch((error) => {
      console.error("Erro ao enviar e-mail: ", error);
      toast({
        title: "Erro!",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
      });
    });
  };

  return (
    <section id="contact" className={`py-16 md:py-20 w-full bg-white`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16 ${FontArista.className}`}>
          Entre em Contato
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome"
              className={`w-full py-3 px-4`}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="E-mail"
              className={`w-full py-3 px-4`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Telefone"
              className={`w-full py-3 px-4`}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
            <Textarea
              placeholder="Mensagem"
              className={`w-full py-3 px-4`}
              rows={5}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
            <Button
              type="submit"
              className={`w-full bg-gray-600 text-white hover:bg-gray-800 py-3 md:py-4 text-base md:text-lg font-semibold ${FontArista.className}`}
            >
              Enviar Mensagem
            </Button>
          </form>

          <div className="mt-12 text-center">
            <h3 className={`text-xl font-bold mb-4 ${FontArista.className}`}>Ou contate-nos via WhatsApp</h3>
            <WhatsAppButton 
              phoneNumber="69999900694" 
              message="Olá, Colab Devs!" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
