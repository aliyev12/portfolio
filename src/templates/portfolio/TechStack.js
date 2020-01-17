import React from 'react';
import logos from './texhStackLogos';

const TechStack = () => {
  return (
    <div>
      <img src={logos['htmlCssJs'].img} alt={logos['htmlCssJs'].alt} />
      <img src={logos['mongodb'].img} alt={logos['mongodb'].alt} />
    </div>
  );
};

export default TechStack;
