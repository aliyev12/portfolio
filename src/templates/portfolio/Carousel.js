import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { imgSrc } from 'utils/helpers';
import { CarouselWrapper, NextArrow, PrevArrow } from './CarouselStyles';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Carousel = ({ featuredMedia, additionalExist, additionalImages }) => {
  const [images, setImages] = React.useState(0);
  const [featuredImgHeight, setFeaturedImgHeight] = React.useState(480);

  React.useEffect(() => {
    const {
      details: { width, height },
    } = featuredMedia;
    const neededHeight = (height * 880) / width;
    setFeaturedImgHeight(neededHeight);
  }, []);

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
      additionalImages.forEach(img => {
        imagesArr.push(
          <div key={img.imgId}>
            <Img
              className="img"
              objectFit="contain"
              fluid={imgSrc(img, 'fluid')}
              alt={img.alt}
            />
          </div>
        );
      });
    }

    setImages(imagesArr);
  }, []);

  return (
    <CarouselWrapper featuredImgHeight={featuredImgHeight}>
      <Slider {...sliderSettings}>
        {images && images.length ? images : <div></div>}
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
