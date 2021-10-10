import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer-wrapper">
      <Container className="pt-4">
        <Row className='text-center'>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h6>REDES SOCIALES</h6>
            <div className="social-icons">
              <a href="https://www.tiktok.com/@sugarsisterscr?" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
              <a href="https://www.instagram.com/sugarsisterscr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/sugarssisterscr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h6>CONTACTO</h6>
            <address>
              Quintana de los Reyes <br/>
              San José, CR. <br/>
              <a href="tel:+50664584519">&#128241; 6458-4519</a>
            </address>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mt-4'>
            <h6>Copyright &copy; SugarSisters {getCurrentYear()} | Made with &#10084;&#65039; by <a className="github-link" href="https://github.com/callejas1" target="_blank" rel="noopener noreferrer">callejas1</a></h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;
