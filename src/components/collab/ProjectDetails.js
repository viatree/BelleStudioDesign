// src/components/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { imageData, OlisticDetails, projectHeadline } from '../constants/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Custom.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = imageData.find((image, index) => index === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <section className="hero-section">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={project.src} alt={project.alt} />
            <Carousel.Caption>
              <h3>{project.alt}</h3>
              <p>{project.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={project.src} alt={project.alt} />
            <Carousel.Caption>
              <h3>{project.alt}</h3>
              <p>{project.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={project.src} alt={project.alt} />
            <Carousel.Caption>
              <h3>{project.alt}</h3>
              <p>{project.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </section>

        <section className="project-description mt-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <ul className="headline-list">
                            {projectHeadline.map((headline, index) => (
                                <li key={index}>
                                    <strong>Client:</strong> {headline.client} <br />
                                    <strong>Venue:</strong> {headline.venue} <br />
                                    <strong>Category:</strong> {headline.category} <br />
                                    <strong>Status:</strong> {headline.status} <br />
                                    <strong>PIC:</strong> {headline.pic}
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col md={9}>
                        <h2 className="font-bold">{project.alt}</h2>
                        <p className="font-regular">{project.desc}</p>
                    </Col>
                </Row>
    
            </Container>
        </section>
        

      <section className="project-gallery mt-5">
        <Row>
          {OlisticDetails.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <img src={image.src} alt={image.alt} className="img-fluid" />
            </Col>
          ))}
        </Row>
      </section>
      </>
  );
};

export default ProjectDetails;