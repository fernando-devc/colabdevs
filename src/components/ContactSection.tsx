import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 w-full bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Entre em Contato</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <Input type="text" placeholder="Nome" className="w-full py-3" />
            <Input type="email" placeholder="E-mail" className="w-full py-3" />
            <Input type="tel" placeholder="Telefone" className="w-full py-3" />
            <Textarea placeholder="Mensagem" className="w-full py-3" rows={5} />
            <Button className="w-full bg-green-500 text-white hover:bg-green-600 py-4 text-lg font-semibold">Enviar Mensagem</Button>
          </form>
        </div>
      </div>
    </section>
  )
}