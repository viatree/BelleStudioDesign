import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, 
  Row, 
  Col, 
  Card, 
  Image, 
  Accordion 
} from 'react-bootstrap';
//Constants
import { 
  aboutHero, 
  visionMission, 
  adminData, 
  frequentAQ, 
  clientsLogo, 
  ourServices 
} from '../../constants/index.js';
//CSS
import '../css/AboutUs.css';
import '../css/Custom.css';

const AboutUs = () => {
  return (
    <>
      <header className="mt-5 mb-5 container">
        <Row className="mb-5 align-items-center">
          <Col md={6} className="text-center align-items-center">
            <Image src={aboutHero.teamworkImage} alt="Our Team" className="hero_img" />
          </Col>

          <Col md={6}>
            <h2 className="font-heavy">{aboutHero.aboutUsContent.title}</h2>
            <p className="font-light">
              {aboutHero.aboutUsContent.description.split('\n').map((line, index) => ( 
                <React.Fragment key={index}>{line}</React.Fragment>
              ))}
            </p>
          </Col>
        </Row>
      </header>

      {/* Clients Showcase */}
      <section className="mt-5 mb-5 client-showcase">
        <Container>
          <Row className="justify-content-center align-items-center">
            {clientsLogo.map((client, index) => (
              <Col key={index} xs={6} sm={4} md={2} className="text-center mb-4">
                <img src={client.src} alt={client.alt} className="client-logo" />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="mt-5 mb-5 container services">
        {ourServices.servicesContent.map((content, index) => (
          <Row className="mb-5 align-items-center" key={index}>
            <Col md={index % 2 === 0 ? 6 : { order: 'last' }} className="text-center">
              <Image 
              src={ourServices.servicesImg[index].src} 
              alt={ourServices.servicesImg[index].alt} 
              className={`srvs_img srvs_img${index + 1}`} />
            </Col>

            <Col md={6} className="service_content">
              <h2 className="font-heavy">{content.title}</h2>
              <p className="font-light">
                {content.description.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>{line}</React.Fragment>
                ))}
              </p>
            </Col>
          </Row>
        ))}
      </section>

      {/* Our Services */}
         {/* <section className="mt-5 mb-5 container _services">
          <Row className="mb-5 align-items-center">
            <Col md={6} className="text-center align-items-center">
              <Image src={aboutHero.teamworkImage} alt="Our Team" className="srvs_img" />
            </Col>

            <Col md={6}>
              <h2 className="font-heavy">{aboutHero.aboutUsContent.title}</h2>
              <p className="font-light">
                {aboutHero.aboutUsContent.description.split('\n').map((line, index) => ( 
                  <React.Fragment key={index}>{line}</React.Fragment>
                ))}
              </p>
            </Col>
          </Row>
        </section> */}



        {/* <section className="mt-5 mb-5 _services">
          <Row className="mb-5 align-items-center">
            <Col md={6} className="text-center">
              <Image src={ourServices.servicesImg[0].src} alt={ourServices.servicesImg[0].alt} className="srvs_img" />
            </Col>

            <Col md={6}>
              <h2 className="font-heavy">{ourServices.servicesContent[0].title}</h2>
              <p className="font-light text-justify">
                {ourServices.servicesContent[0].description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>{line}</React.Fragment>
                ))}
              </p>
            </Col>
          </Row>

          <Row className="mb-5 align-items-center">
            <Col md={6}>
              <h2 className="font-heavy">{ourServices.servicesContent[1].title}</h2>
              <p className="font-light">
                {ourServices.servicesContent[1].description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>{line}</React.Fragment>
                ))}
              </p>
            </Col>

            <Col md={6} className="text-center">
              <Image src={ourServices.servicesImg[1].src} alt={ourServices.servicesImg[1].alt} className="srvs_img" />
            </Col>
          </Row>

          <Row className="mb-5 align-items-center">
            <Col md={6} className="text-center">
              <Image src={ourServices.servicesImg[2].src} alt={ourServices.servicesImg[2].alt} className="srvs_img" />
            </Col>

            <Col md={6}>
              <h2 className="font-heavy">{ourServices.servicesContent[2].title}</h2>
              <p className="font-light">
                {ourServices.servicesContent[2].description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>{line}</React.Fragment>
                ))}
              </p>
            </Col>
          </Row>

          <Row className="mb-5 align-items-center">
            <Col md={6}>
              <h2 className="font-heavy">{ourServices.servicesContent[3].title}</h2>
              <p className="font-light">
                {ourServices.servicesContent[3].description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>{line}</React.Fragment>
                ))}
              </p>
            </Col>
            <Col md={6} className="text-center">
              <Image src={ourServices.servicesImg[3].src} alt={ourServices.servicesImg[3].alt} className="srvs_img" />
            </Col>
          </Row>
        </section> */}
              
        {/* Vision and Mission */}      
        <section className="mt-5 mb-5 visionMission">
        {/* <Parallax bgImage={parallaxImage} strength={500} className="parallax"> */}
          <Row className="align-items-center">
            {visionMission.map((item, index) => (
              <Col key={index} md={6} className="content-box">
                <div className="content-inner">
                  <h2 className="text-center font-heavy">{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
      {/* </Parallax> */}
    </section>
        

        {/* Our Team Section */}
        {/* <Row className="mb-5">
          <Col>
            <h2 className="text-center font-heavy">Our Team</h2>
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
        </Row> */}

<section className="our-team">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center font-heavy">Our Team</h2>
          </Col>
        </Row>
        <Row>
          {adminData.map((admin, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="team-card">
                <Card.Img variant="top" src={admin.src} alt={admin.name} />
                <Card.Body>
                  <Card.Title>{admin.name}</Card.Title>
                  <Card.Text>{admin.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </section>

        {/* FAQ Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center font-heavy">Frequently Asked Questions</h2>
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
    </>
  );
}

export default AboutUs;