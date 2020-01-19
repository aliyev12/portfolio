import React from 'react';
import styled from 'styled-components';
import { styles } from 'utils';
import logos from './texhStackLogos';

const TechWrapper = styled.div`
  border: 1px solid pink;
  transform: scale(0.5);

  .tech-slideshow {
    position: relative;
    height: 6rem;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .tech-slideshow > div {
    position: absolute;
    height: 6rem;
    width: ${({ moverWidth }) => `${moverWidth}px`};
    top: 0;
    left: 0;
    height: 100%;
    transform: translate3d(0, 0, 0);
  }
  .tech-slideshow .mover {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: moveSlideshow 30s linear infinite;

    img {
      margin: 0 1.5rem;
    }
  }

  @keyframes moveSlideshow {
    100% {
      transform: translateX(-66.6666%);
    }
  }
`;

const TechSlideshow = () => {
  const moverWidth = Object.keys(logos).reduce(
    (acc, curr) => acc + logos[curr].width,
    0
  );
  console.log('moverWidth = ', moverWidth);

  return (
    <TechWrapper moverWidth={moverWidth * 3}>
      <div class="tech-slideshow">
        <div class="mover">
          {[
            ...Object.keys(logos),
            ...Object.keys(logos),
            ...Object.keys(logos),
          ].map(logoKey => (
            <img
              src={logos[logoKey].img}
              alt={logos[logoKey].alt}
              width={logos[logoKey].width}
            />
          ))}
        </div>
      </div>
    </TechWrapper>
  );
};

export default TechSlideshow;
