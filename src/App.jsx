
import { useEffect } from 'react';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Footer, Privacy } from './components';
import StarsCanvas from './components/canvas/Stars';

function App() {



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
        <Footer />
      </div>
    </div>
  );
}

export default App;
