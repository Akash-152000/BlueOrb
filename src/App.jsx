
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Footer, Privacy } from './components';
import StarsCanvas from './components/canvas/Stars';

function App() {
  return (
    
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0  '>
          <Contact />
          <StarsCanvas />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
