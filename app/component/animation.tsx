import React from 'react';
import '../css/animation.css';

export default function Animation () {
    
       
  return(
  <div className="video-container">
    <video autoPlay loop muted>
      <source src={"https://thumbs.gfycat.com/SprySecondhandGangesdolphin-mobile.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )  
}