// src/components/ProjectsClicked.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { carouselData, imageData } from '../../constants/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Custom.css';
import '../css/ProjectsClicked.css';

const ProjectsClicked = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [fadeClass, setFadeClass] = useState('fade-in');
  const navigate = useNavigate();

  useEffect(() => {
    setFadeClass('fade-out');
    const timeout = setTimeout(() => {
      setFadeClass('fade-in');
    }, 500); // Durasi harus sesuai dengan durasi animasi CSS

    return () => clearTimeout(timeout);
  }, [activeCategory]);

  const handleSelect = (selectedKey) => {
    setActiveCategory(selectedKey);
  };

  const filteredImages = activeCategory === 'All' ? imageData : imageData.filter(image => image.category === activeCategory);

  const handleImageClick = (index) => {
    navigate(`/project/${index}`);
  };

  return (
    <>
      <Carousel interval={3500} pause={false} indicators={false} controls={false}>
        {carouselData.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
            />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="all_projects_content">
        <h2 className="font-bold">All Projects</h2>

        {/* <Nav variant="pills" className="filter_projects" onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="All" className="border_box">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Urban & Architecture" className="border_box">Urban & Architecture</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Interior - Exhibition" className="border_box">Interior - Exhibition</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Graphic Design" className="border_box">Graphic Design</Nav.Link>
          </Nav.Item>
        </Nav> */}

        {/* <Nav variant="pills" className="filter_projects" activeKey={activeCategory} onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="All" className={`border_box ${activeCategory === 'All' ? 'active' : ''}`}>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Urban & Architecture" className={`border_box ${activeCategory === 'Urban & Architecture' ? 'active' : ''}`}>Urban & Architecture</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Interior - Exhibition" className={`border_box ${activeCategory === 'Interior - Exhibition' ? 'active' : ''}`}>Interior - Exhibition</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Graphic Design" className={`border_box ${activeCategory === 'Graphic Design' ? 'active' : ''}`}>Graphic Design</Nav.Link>
          </Nav.Item>
        </Nav> */} 

        {/* <Row>
          {filteredImages.map((image, index) => (
            <Col key={index} md={4} className="mt-2 mb-2 image-container" onClick={() => handleImageClick(index)}>
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} className="img-fluid" />
                <div className="image-caption">
                  {image.caption}
                </div>
              </div>
            </Col>
          ))}
        </Row> */}

        <Row className={`project-images ${fadeClass}`}>
          {filteredImages.map((image, index) => (
            <Col key={index} md={4} className="mt-2 mb-2 image-container" onClick={() => handleImageClick(index)}>
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} className="img-fluid" />
                <div className="image-caption">
                  {image.caption}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProjectsClicked;