// ConveyorBelt.js
import React, { useState, useEffect } from 'react';
import './../CSS/XL.css'
import './../CSS/XS.css'

const ConveyorBelt = () => {
  const texts = ["𝘿𝘼𝙒𝙉  ·  𝘼 𝙒𝙀𝘽𝙎𝙄𝙏𝙀 𝙋𝙊𝙍𝙏𝙁𝙊𝙇𝙄𝙊  ·  𝘾𝙍𝙀𝘼𝙏𝙀𝘿 𝘽𝙔 𝘿𝘼𝙒𝙉 𝙀𝙇 𝙍𝙊𝙔 𝙃𝙐𝙇𝙇𝘼𝙉𝘼  ·"]; // Add your desired texts
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 500); // Adjust the interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className="conveyor-belt-container">
      <div className="conveyor-belt">
        {texts.map((text, index) => (
          <div key={index} className={`conveyor-item ${index === currentIndex ? 'active' : ''}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConveyorBelt;
