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
          {techStack.slice(0, 7).map(logoKey => {
            const key = Object.keys(logos).find(el => el === logoKey);
            if (!key) return null;
            return (
              <img
                key={logoKey}
                src={logos[key].img}
                alt={logos[key].alt}
                title={logos[key].alt}
                width={logos[key].width}
              />
            );
          })}
        </div>
        <Chips stack={techStack} />
      </Content>
    </TechWrapper>
  );
};

export default TechStack;
