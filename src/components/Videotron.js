// src/components/Videotron.js

import React from 'react';
import '../components/css/Videotron.css';
// import '../assets/images/Belle Design Studio - Buttonscarves .mov'

const Videotron = () => {
  return (
    <div className="videotron-container">
      <video className="videotron-video" controls>
        <source src="../assets/images/Belle Design Studio - Buttonscarves .mov" type="video/mov" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videotron;
