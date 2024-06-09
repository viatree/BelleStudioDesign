import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMobileAlt, faSearch, faShoppingCart, faClock, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { workProgressData, whatYouGetData, pricingPlansData } from '../constants/index';
import './css/Pricing.css';
import './css/Custom.css'

const iconMap = {
  palette: faPalette,
  'mobile-alt': faMobileAlt,
  search: faSearch,
  'shopping-cart': faShoppingCart,
  clock: faClock,
  headset: faHeadset,
};

function Pricing() {
  return (
    <div>
      {/* Hero Section
        <Container fluid className="text-center bg-primary text-white jumbotron-hero">
          <h1 className="display-4">Belle Design Studio</h1>
          <p className="lead">Bringing Your Vision to Life</p>
          <Button variant="light" size="lg" className="hero-button">Learn More</Button>
        </Container> */}

      <Container>
        {/* Our Work Progress Section */}
        <section className="my-5">
          <h2 className="text-center section-title">Our Work Progress</h2>
          <Row>
            {workProgressData.map((step, index) => (
              <Col key={index} sm={6} md={3}>
                <Card className="text-center border-0 shadow-sm">
                  <Card.Body>
                    <Card.Title>Step {step.step}</Card.Title>
                    <Card.Text>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* What You Get Section */}
        <section className="my-5">
          <h2 className="text-center section-title">What You Get</h2>
          <Row>
            {whatYouGetData.map((feature, index) => (
              <Col key={index} sm={6} md={4}>
                <Card className="text-center border-0 shadow-sm">
                  <Card.Body>
                    <FontAwesomeIcon icon={iconMap[feature.icon]} size="3x" className="mb-3" />
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Pricing Section */}
        <section className="my-5">
          <h2 className="text-center section-title">Pricing</h2>
          <Row>
            {pricingPlansData.map((plan, index) => (
              <Col key={index} sm={12} md={4}>
                <Card className="text-center border-0 shadow-sm">
                  <Card.Body>
                    <Card.Title>{plan.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{plan.price}</Card.Subtitle>
                    <ul className="list-unstyled">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <Button variant="primary">Choose Plan</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Pricing;