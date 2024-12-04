import React, { useState, useEffect } from 'react';
import Heading from '../../Atom/Heading/Heading';


const Content = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the screen width is less than or equal to 768px (you can adjust this breakpoint)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: isMobile ? 'auto' : '100vh', overflowY: isMobile ? 'visible' : 'auto' }} className='hide-scrollbar'>
      <Heading url="https://newsapi.org/v2/top-headlines?country=us&apiKey=7b69dc6601ca4533ae6135ec7c4afdf4" />
    </div>
  );
};

export default Content;
