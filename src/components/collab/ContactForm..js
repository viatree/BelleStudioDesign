import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ContactUs.css';

const ContactForm = () => {
  return (
    <Container className="contact-container">
      <Row>
        <Col md={6} className="contact-info">
          <h2>Contact Us</h2>
          <p><FontAwesomeIcon icon="fa-solid fa-phone"/> +62 852-1159-2858</p>
          <p><FontAwesomeIcon icon="fa-solid fa-envelope"/> contact@belledesignstudio.org</p>
          <p><FontAwesomeIcon icon="fa-solid fa-location-dot"/> Apartemen Royal Mediterania, Tanjung Duren, Kecamatan Grogol, Pertamburan, Jakarta Barat, Indonesia - 11470</p>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.734944800175!2d106.7826164!3d-6.1753875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70a5c3624ed%3A0x40113fe9d62a480!2sApartemen%20Royal%20Mediterania%20Garden%20Residences!5e0!3m2!1sen!2sid!4v1589452384566!5m2!1sen!2sid"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Col>
        <Col md={6} className="contact-form">
          <Form>
            <h1>Get in Touch with Us!</h1>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Your Name..." className="form-control" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Your Email..." className="form-control" />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Control type="text" placeholder="Phone Number..." className="form-control" />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Control type="text" placeholder="Subject..." className="form-control" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={3} placeholder="Your Message..." className="form-control" />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn">Submit</Button>
          </Form>
        </Col>
      </Row>

      <Row className="testimonials-section">
        <Col xs={12}>
          <h2 className="text-center">Testimonials</h2>
        </Col>
        {[1, 2, 3, 4].map((item, index) => (
          <Col md={6} key={index} className="d-flex justify-content-center">
            <Card className="testimonial-card">
              <Card.Body>
                <Row>
                  <Col xs={4} className="d-flex align-items-center justify-content-center">
                    <img
                      src="path/to/image.png"
                      alt="testimonial"
                      className="testimonial-image"
                    />
                  </Col>
                  <Col xs={8}>
                    <blockquote className="blockquote mb-0">
                      <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor diam at eros consectetur, quis accumsan odio eleifend. Cras gravida justo et turpis laoreet, sit amet sollicitudin ligula congue. Nullam a velit hendrerit, gravida libero quis, consequat arcu. Vestibulum vitae egestas sapien, a rutrum sapien.”</p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Ahmad Jenong, Photographer</cite>
                      </footer>
                    </blockquote>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ContactForm;