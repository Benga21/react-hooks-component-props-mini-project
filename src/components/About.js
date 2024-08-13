import React from 'react';

const About = ({ image, about }) => (
  <aside>
    <img 
      src={image || "https://e7.pngegg.com/pngimages/352/117/png-clipart-call-of-duty-black-ops-2-logo-call-of-duty-black-ops-iii-call-of-duty-4-modern-warfare-call-of-duty-video-game-call-of-duty-thumbnail.png"} 
      alt="blog logo" 
    />
    <p>{about}</p>
  </aside>
);

export default About;
