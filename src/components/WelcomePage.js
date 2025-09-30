import React from 'react';
import './Welcome.css'; // You'll create this for styling
import ElevenLabsWidget from './widget';
import { useEffect,useRef } from 'react';
function WelcomePage() {


  return (<>   <ElevenLabsWidget/>
    <div className="welcome-container">
      <img src="/images/TiwilLOGO1.png" alt="Tiwil Logo" className="logo" />
      <h1>Welcome to Tiwil</h1>
      <p>Plan your celebrations and share special moments with ease.</p>
      
      <a
        href="https://play.google.com/store/apps/details?id=com.tiwil.app" // replace with your actual link
        target="_blank"
        rel="noopener noreferrer"
        className="download-button"
      >
        <img src="/images/playstore-svgrepo-com.svg" alt="Play Store" />
        Download on Play Store
      </a>
    </div>
    </>
  );
}

export default WelcomePage;
