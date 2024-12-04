import React, { useEffect, useState } from 'react'
import { Navbars,Recommend } from '../../Components/Molekul/index.js'
import { useSelector } from 'react-redux';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../../Components/Atom/Heading/Heading.jsx';

function Searching() {

  const search=localStorage.getItem("search")
  const [isMobile, setIsMobile] = useState(false);
  console.log(search)
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
    <>
      <Navbars/>
      <Container className='mt-5'>
        <Row>
          <Col lg="8" className='mt-5 hide-scrollbar'  style={{ height: isMobile ? 'auto' : '100vh', overflowY: isMobile ? 'visible' : 'auto' }} >
            <Heading url={`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=7b69dc6601ca4533ae6135ec7c4afdf4`}/>
          </Col>
          <Col lg="4" className='mt-5' style={{ display:isMobile ? "none":"block" }}>
            <Recommend nomorGanjil={true}/>
          </Col>
        </Row>
      </Container>
    </>
  );


}

export default Searching
