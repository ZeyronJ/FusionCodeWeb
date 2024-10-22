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
  return (
    <div className='relative bg-white h-full overflow-auto '>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      {/* <Technologies /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
