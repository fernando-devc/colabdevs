import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import Star from './Stars'

const services = [
  {
    icon: <Code className="dark:text-green-400 text-white w-16 h-16 mb-6 mx-auto"/>,
    title: 'Desenvolvimento Web',
    description: 'Criamos websites responsivos e intuitivos que elevam a presença online da sua empresa.'
  },
  {
    icon: <Smartphone className="dark:text-green-400 text-white w-16 h-16 mb-6 mx-auto"/>,
    title: 'Aplicativos Mobile',
    description: 'Desenvolvemos aplicativos móveis inovadores para iOS e Android que engajam seus usuários.'
  },
  {
    icon: <Users className="dark:text-green-400 text-white w-16 h-16 mb-6 mx-auto" />,
    title: 'Consultoria em TI',
    description: 'Oferecemos consultoria especializada para otimizar seus processos e infraestrutura de TI.'
  }
]

export default function SpaceService() {
  const [currentService, setCurrentService] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dark:bg-black dark:text-white w-full min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden relative">
      <div className="h-screen top-0 bottom-0 overflow-hidden absolute z-20 w-full ">
        {[...Array(100)].map((_, index) => (
          <Star key={index} size={Math.floor(Math.random() * 2) + 1} />
          
        ))}
      </div>
      <Moon />
      <Planet1 />
      <Planet2 />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12 text-green-400 z-10"
      >
        Nossos Serviços
      </motion.h1>

      <div className="relative w-full max-w-4xl mb-20">
        <motion.div
          key={currentService}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="dark:bg-gray-900 bg-green-500 bg-opacity-80 p-8 rounded-lg shadow-lg text-center"
        >
          {services[currentService].icon  }
          <h2 className="text-3xl font-bold mb-4">{services[currentService].title}</h2>
          <p className="text-xl dark:text-gray-300">{services[currentService].description}</p>
        </motion.div>
        <button
          onClick={() => setCurrentService((prev) => (prev - 1 + services.length) % services.length)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-green-400 p-2 rounded-full text-black"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentService((prev) => (prev + 1) % services.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-green-400 p-2 rounded-full text-black"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10"
      >
        <h2 className="text-4xl font-bold mb-4">
          Transformando Ideias em <span className="text-green-400">Realidade Digital</span>
        </h2>
        <p className="text-xl dark:text-gray-300 mb-8">
          Soluções inovadoras para web, mobile e além. Impulsionando o futuro da tecnologia.
        </p>
        <motion.button
          className="bg-green-400 text-black font-bold py-3 px-8 rounded-full text-lg"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Comece seu Projeto
        </motion.button>
      </motion.div>
    </div>
  )
}

function Stars() {
  return (
    <div className="fixed inset-0">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animation: `twinkle ${Math.random() * 5 + 5}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}

function Moon() {
  return (
     <motion.div
      className="absolute top-20 right-20 w-32 h-32 rounded-full"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <img src="/alien-rocket.svg " className='z-10 absolute'  />
      <img src='/Moon.svg' className='z-0 absolute top-10 md:h-28 lg:h-28 h-16' />
    </motion.div>
  )
}

function Planet1() {
  return (
    <motion.div
      className="absolute bottom-20 left-20 w-44 lg:w-64 h-44 lg:h-64 rounded-full"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <img src="/portal-planets.svg"  />
    </motion.div>
  )
}

function Planet2() {
  return (
    <motion.div
      className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-blue-500"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

