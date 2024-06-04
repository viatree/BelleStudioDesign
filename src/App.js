// src/App.js
import React, { useState } from 'react';
import WelcomeSection from './components/WelcomeSection'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Preloader from './components/Preloader';

library.add(fas, far, fab);

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? (
        <WelcomeSection />
      ) : (
        <Preloader onLoaded={() => setLoaded(true)} />
      )}
    </>
  );
};

export default App;