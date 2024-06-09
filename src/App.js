import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//CSS
import './App.css';

//Pages 
import Preloader from './components/Preloader';
import WelcomeSection from './components/WelcomeSection';
import AboutUs from './components/collab/AboutUs.js';
import Test from './components/collab/Pricing.js'
import ProjectsClicked from './components/collab/ProjectsClicked.js';
import ProjectDetails from './components/collab/ProjectDetails.js';

library.add(fas, far, fab);

const App = () => {
  // const [loaded, setLoaded] = useState(false);

  return (
    <>
     {/* <ProjectClicked/> */}
    <AboutUs/>

    {/* <Router>
      <Routes>
        <Route path="/" element={<ProjectsClicked />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router> */}

    {/* <Test/> */} 

      {/* {loaded ? (
        <WelcomeSection />
      ) : (
        <Preloader onLoaded={() => setLoaded(true)} />
      )} */}
    </>
  );
};

export default App;