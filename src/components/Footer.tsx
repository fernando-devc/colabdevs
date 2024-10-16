export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2024 Colab Devs. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.youtube.com/@colabdevs743" className="text-gray-400 hover:text-green-600  transition-colors">Youtube</a>
            <a href="https://www.linkedin.com/in/colab-devs-7b41b3244/" className="text-gray-400 hover:text-green-600  transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/colabdevs/" className="text-gray-400 hover:text-green-600  transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    )
  }