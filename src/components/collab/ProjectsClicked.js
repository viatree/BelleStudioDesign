// src/components/ProjectsClicked.js
import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { imageData } from '../constants/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ProjectsClicked.css';

const ProjectsClicked = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const handleSelect = (selectedKey) => {
    setActiveCategory(selectedKey);
  };

  const filteredImages = activeCategory === 'All' ? imageData : imageData.filter(image => image.category === activeCategory);

  const handleImageClick = (index) => {
    navigate(`/project/${index}`);
  };

  return (
    <Container className="mt-5 mb-5">
      <div className="all_projects_content">
        <h2 className="font-bold">All Projects</h2>

        <Nav variant="pills" className="filter_projects" onSelect={handleSelect}>
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
        </Nav>

        <Row>
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
    </Container>
  );
};

export default ProjectsClicked;