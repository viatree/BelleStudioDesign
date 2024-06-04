import React from 'react';
import { Container, Row, Col, Card, Image, Accordion } from 'react-bootstrap';
import { aboutHero, visionMission, adminData, frequentAQ } from '../constants/index.js';
import '../components/css/AboutUs.css';


const AboutUs = () => {  
  return (
    <Container className="my-5">
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <Image src={aboutHero.teamworkImage} fluid alt="Our Team" style={{ width: '100%', height: 'auto' }} />
        </Col>

        <Col md={6}>
          <h3 className="text-align-center font-medium">{aboutHero.aboutUsContent.title}</h3>
          <p className="font-regular">
            {aboutHero.aboutUsContent.description.split('\n').map((line, index) => (
              <React.Fragment key={index}>{line}</React.Fragment>
            ))}
          </p>
        </Col>
      </Row>
      
      {/* Vision and Mission */}
      <Row className="mb-5 bg_img">
        {visionMission.map((item, index) => (
          <Col key={index} md={6}>
            <h2 className="text-center">{item.title}</h2>
            <p>{item.text}</p>
          </Col>
        ))}
      </Row>

      {/* Our Team Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Our Team</h2>
          <Row>
            {adminData.map((admin, index) => (
              <Col key={index} md={4}>
                <Card className="hover-card">
                  <Card.Img variant="top" src={admin.src}/>
                  <Card.Body>
                    <Card.Title>{admin.name}</Card.Title>
                    <Card.Text>{admin.role}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Frequently Asked Questions</h2>
          <Accordion>
            {frequentAQ.map((item, index) => (
              <Accordion.Item eventKey={item.eventKey} key={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
      
    </Container>
  );
}

export default AboutUs;