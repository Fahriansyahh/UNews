import React, { useEffect, useState } from 'react'
import { Content, Navbars,Recommend } from '../../Components/Molekul/index.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
   // State untuk menyimpan ukuran lebar jendela
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   // Menambahkan event listener untuk mendeteksi perubahan ukuran layar
   useEffect(() => {
     const handleResize = () => {
       setWindowWidth(window.innerWidth);  // Update state ketika ukuran jendela berubah
     };
 
     // Menambahkan event listener untuk resize
     window.addEventListener('resize', handleResize);
 
     // Membersihkan event listener saat komponen dibersihkan
     return () => window.removeEventListener('resize', handleResize);



 
   }, []);
  return (
    <> 
     <Navbars /> 
      <Container className="pt-5 mt-5" style={{ maxWidth: "100%" }}>
      {windowWidth < 768 ? (
         <Row className="d-flex justify-content-center ">
         {/* First Recommend (On large screens 3 columns, on mobile 6 columns) */}
       
         <Col xs={12} md={6} lg={6}>
           <Content />
         </Col>
         <Col xs={6} md={3} lg={3}>
           <Recommend nomorGanjil={false} />
         </Col>
 
         {/* Content (On large screens 6 columns, on mobile 12 columns) */}
        
 
         {/* Second Recommend (On large screens 3 columns, on mobile 6 columns) */}
         <Col xs={6} md={3} lg={3}>
           <Recommend nomorGanjil={true} />
         </Col>
       </Row>
      ) : (
        <Row className="justify-content-md-center" >
        {/* First Recommend (On large screens 3 columns, on mobile 6 columns) */}
        <Col xs={12} md={3} lg={3}>
          <Recommend nomorGanjil={false} />
        </Col>

        {/* Content (On large screens 6 columns, on mobile 12 columns) */}
        <Col xs={12} md={6} lg={6}>
          <Content />
          
        </Col>

        {/* Second Recommend (On large screens 3 columns, on mobile 6 columns) */}
        <Col xs={12} md={3} lg={3}>
          <Recommend nomorGanjil={true} />
        </Col>
      </Row>
      )}
    
    </Container>

    </>
  )
}
