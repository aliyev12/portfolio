import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import { imgSrc } from 'utils/helpers';
import { helpers } from 'utils';
import { ImgPaper } from './PortfolioStyles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import { styles } from 'utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarouselWrapper = styled.div`
  max-width: 900px;
  flex-grow: 1;

  .img {
    max-height: ${({ featuredImgHeight }) => `${featuredImgHeight}px`};
    display: block;
    max-width: 900px;
    overflow: hidden;
    width: 100%;
  }

  .mobile-stepper {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding-bottom: 0;

    .switch-slide-btn {
      color: ${({ theme }) => theme.text};
    }
  }
`;

const Carousel = ({ featuredMedia, additionalExist, additionalImages }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [images, setImages] = React.useState(0);
  const [featuredImgHeight, setFeaturedImgHeight] = React.useState(480);
  const theme = useTheme();

  React.useEffect(() => {
    const {
      details: { width, height },
    } = featuredMedia;
    const neededHeight = (height * 880) / width;
    setFeaturedImgHeight(neededHeight);
  }, []);

  const maxSteps =
    additionalExist && additionalImages && additionalImages.length
      ? additionalImages.length + 1
      : 1;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  React.useEffect(() => {
    const imagesArr = [
      <div key="001">
        <Img
          className="img featured"
          objectFit="contain"
          fluid={imgSrc(featuredMedia, 'fluid')}
          alt={featuredMedia.alt}
        />
      </div>,
    ];

    if (
      additionalExist &&
      additionalImages &&
      additionalImages.length &&
      Array.isArray(additionalImages)
    ) {
      additionalImages.forEach((img, index) => {
        imagesArr.push(
          <div key={img.imgId}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Img
                className="img"
                objectFit="contain"
                fluid={imgSrc(img, 'fluid')}
                alt={img.alt}
              />
            ) : null}
          </div>
        );
      });
    }

    setImages(imagesArr);
  }, []);

  return (
    <CarouselWrapper featuredImgHeight={featuredImgHeight}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images && images.length ? images : <div></div>}
      </AutoPlaySwipeableViews>
      {additionalExist && (
        <MobileStepper
          className="mobile-stepper"
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              className="switch-slide-btn"
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className="switch-slide-btn"
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      )}
    </CarouselWrapper>
  );
};

export default Carousel;

// {/* <div key="001">
//   <Img
//     className="img featured"
//     objectFit="contain"
//     fluid={imgSrc(featuredMedia, 'fluid')}
//     alt={featuredMedia.alt}
//   />
// </div> */}
// {/* {additionalExist &&
//   additionalImages.map((img, index) => {
//     return (
//       <div key={img.imgId}>
//         {Math.abs(activeStep - index) <= 2 ? (
//           <Img
//             className="img"
//             objectFit="contain"
//             fluid={imgSrc(img, 'fluid')}
//             alt={img.alt}
//           />
//         ) : null}
//       </div>
//     );
//   })} */}
