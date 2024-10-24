import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  // Definir las variantes de animación
  const animationVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial
    visible: { opacity: 1, y: 0 }, // Estado visible
  };

  return (
    <div className='relative bg-white h-full overflow-auto'>
      <Header />
      <Home />

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={animationVariants}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={animationVariants}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={animationVariants}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={animationVariants}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
