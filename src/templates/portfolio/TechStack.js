import React from 'react';
import { TechWrapper, Content } from './TechStackStyles';
import logos from './texhStackLogos';
import Chips from './Chips';

const TechStack = ({ techStack }) => {
  return (
    <TechWrapper>
      <Content>
        <div className="title">Tech Stack</div>
        <div className="logos-container">
          {techStack.slice(0, 7).map(logoKey => (
            <img
              key={logoKey}
              src={logos[logoKey].img}
              alt={logos[logoKey].alt}
              title={logos[logoKey].alt}
              width={logos[logoKey].width}
            />
          ))}
        </div>
        <Chips stack={techStack} />
      </Content>
    </TechWrapper>
  );
};

export default TechStack;
