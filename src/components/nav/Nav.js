import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import IMG from '../../assets/logo2.png';
import './Nav.css'

const Nav = () => {
  return (
    <Navbar bg="primary">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={IMG}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{' '}
         Document-Viewer-App
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Nav