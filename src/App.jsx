
import { useEffect, useRef } from 'react';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Footer } from './components';
import StarsCanvas from './components/canvas/Stars';

function App() {
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const scrollToAboutComponent = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToWorkComponent = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactComponent = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Create a link element for the stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/static/css/main.5fb85b02.css'; // Replace with the actual path to your CSS file
    link.onload = () => {
      // Tailwind CSS is loaded, you can now render your application
    };

    // Append the link element to the document's head
    document.head.appendChild(link);

    // Clean up the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);


  return (

    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar whichPage="home" scrollToAboutComponent={scrollToAboutComponent} scrollToWorkComponent={scrollToWorkComponent} scrollToContactComponent={scrollToContactComponent} />
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <Experience />
      <Tech />
      <div ref={workRef}>
        <Works />
      </div>
      <div className='relative z-0  ' ref={contactRef}>
        <Contact />
        <StarsCanvas />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
