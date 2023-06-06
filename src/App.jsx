
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
import StarCanvas from './components/StarCanvas';

function App() {
  return (
    <BrowserRouter>
 
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero/>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
          <StarCanvas />
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
