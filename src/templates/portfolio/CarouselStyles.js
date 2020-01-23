import React from 'react';
import styled from 'styled-components';
import PrevArrowIcon from '@material-ui/icons/ArrowBackIosRounded';
import NextArrowIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { styles } from 'utils';

export const NextArrow = ({ className, style, onClick }) => (
  <NextArrowIcon className={className} style={{ ...style }} onClick={onClick} />
);

export const PrevArrow = ({ className, style, onClick }) => (
  <PrevArrowIcon className={className} style={{ ...style }} onClick={onClick} />
);

export const CarouselWrapper = styled.div`
  max-width: 900px;
  flex-grow: 1;

  .img {
    max-height: ${({ featuredImgHeight }) => `${featuredImgHeight}px`};
    display: block;
    max-width: 900px;
    overflow: hidden;
    width: 100%;
  }

  .slick-slider {
    .slick-next,
    .slick-prev {
      color: ${({ theme }) => theme.text};
      width: 5rem;
      height: 5rem;
      z-index: 1;
      transition: ${styles.transition};

      path:nth-child(2) {
        stroke: ${({ theme }) => theme.body};
      }

      &:hover {
        transform: translate(0, -50%) rotateX(45deg);
        color: ${styles.colors.mainBlue};
      }
    }

    .slick-prev {
      left: -23px;
    }
    .slick-next {
      right: -23px;
    }

    .slick-prev:before,
    .slick-next:before {
      color: ${({ theme }) => theme.text};
    }

    .slick-dots {
      bottom: -39px;
    }

    .slick-dots li.slick-active button:before,
    .slick-dots li button:before {
      color: ${({ theme }) => theme.text};
    }
  }
`;
