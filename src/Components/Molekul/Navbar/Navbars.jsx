import React from 'react';
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from '../../Atom/Search/Search';

function Navbars() {
  const navigate = useNavigate(); 

  const redirect = (value) => {
   
    // Menyimpan nilai pencarian ke localStorage
    localStorage.setItem("search", value); 
    // Mengarahkan ke halaman /Searching
    navigate("/Searching");
    window.location.reload("/Searching") 
  };



  return (
    <>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary bg-dark">
        <Container fluid>
          <Navbar.Brand href="#">News Country</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Search />
            <Nav className="my-2 my-lg-0 d-flex justify-content-end pe-5 mt-3" style={{ maxHeight: '500px'}} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link onClick={() => redirect("news")}>News</Nav.Link>
              <Nav.Link onClick={() => redirect("sport")}>Sport</Nav.Link>
              <Nav.Link onClick={() => redirect("Bussines")}>Business</Nav.Link>
              <Nav.Link onClick={() => redirect("Innovation")}>Innovation</Nav.Link>
              <Nav.Link onClick={() => redirect("Culture")}>Culture</Nav.Link>
              <Nav.Link onClick={() => redirect("Arts")}>Arts</Nav.Link>
              <Nav.Link onClick={() => redirect("Travel")}>Travel</Nav.Link>
              <Nav.Link onClick={() => redirect("Earth")}>Earth</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
