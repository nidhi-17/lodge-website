import React from 'react';
import '../../styles/contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Iframe from 'react-iframe';
const Contact = () => {
  return (
    <div className='contact'>
      <img src={require('../../images/Contact-us.jpg')} alt="Image here" height={500} width="100%" />
      <div className='centered'>Contact</div>
      <Container >
        <Row>
          <Col xs={6}>
            <div className="left-contact">
              <div className='write'>Feel free to write on info@ourlodge.com</div><br />
              <div className='read'>Morbi viverra viverra tincidunt. Nam condimentum nulla et tortor ultrices tempor. Duisanisi mattis, vehicula augue id, aliquet risus.</div><br /><br /><br />
              <div className='write'>Call us +77 777 777 77</div><br />
              <div className='read'>Morbi viverra viverra tincidunt. Nam condimentum nulla et tortor ultrices tempor. Duisanisi mattis, vehicula augue id, aliquet risus.</div><br /><br /><br />
              <div className='write'>Visit us on Via Venti Settembre, Roma</div><br />
              <div className='read'>Morbi viverra viverra tincidunt. Nam condimentum nulla et tortor ultrices tempor. Duisanisi mattis, vehicula augue id, aliquet risus.</div><br /><br /><br />
              <div><Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14765.792426255794!2d73.19786016977538!3d22.298886500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc58ad99184b5%3A0x695bc1127d2286b!2sRoyal%20Lodge!5e0!3m2!1sen!2sin!4v1643791694145!5m2!1sen!2sin"
                  width="500" height="300"  />
               </div>
            </div>
          </Col>
          <Col>
            <div className="right-contact">
              <div className='write'>How can we help?</div><br />
              <div className='read'>Maecenas consectetur, diam nec posuere aliquam, libero sapien aliquet lacus, tempus cursus odio dolor ac magna. Nam condimentum nulla et tortor ultrices tempor. Duis ac nisi mattis, vehicula augue id aliquet.</div><br />
              <label for="name">FIRST NAME</label >
              <input type="text" name="your-name" value="" size="40" id="name" className="name" aria-required="true" aria-invalid="true" /><br /><br />

              <label for="email">EMAIL ADDRESS</label >
              <input type="text" name="your-name" value="" size="40" id="email" className="name" aria-required="true" aria-invalid="true" /><br /><br />
              <label for="message">WRITE YOUR MESSAGE</label >
              <textarea name="your-message" cols="40" rows="6" id="message" className="textarea" aria-invalid="false"></textarea> <br /> <br />
              <button>SEND</button>

            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Contact;
