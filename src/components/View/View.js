import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const View = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Container>
    <Row className="justify-content-md-center">
      <Col xs lg="2">
      </Col>
      <Col xs lg="2">
      </Col>
      <Col md="auto" className='viewbtn'>
      <Button variant="primary">
        <a href='https://documenviewer.netlify.app/' className='btn'>View-Document</a>
    </Button>
      </Col>
      <Col xs lg="2">
      </Col>
    </Row>
    </Container>
    </>
  )
}

export default View