import React from 'react';
import Img from 'gatsby-image';
import { Header } from 'components/theme';
import { Layout, SEO } from 'components/common';
import styled from 'styled-components';
import TechStack from './TechStack';
import { imgSrc } from 'utils/helpers';

const FeaturedImage = styled(Img)`
  max-width: 30rem;
  margin: 1.6rem 0;
`;

const PortfolioWrapper = styled.section`
  .page-title {
    .title {
    }
  }
  .tech-stack-container {
  }
  .links-container {
  }
  .description-container {
  }
  .images-container {
  }
  .get-in-touch {
  }
`;

const Portfolio = ({ pageContext, data: { portfolio } }) => {
  console.log('Portfolio = ', pageContext);
  console.log('portfolio = ', portfolio);
  return (
    <Layout>
      <SEO />
      <Header />
      <PortfolioWrapper>
        <div className="page-title">
          <div className="title">{portfolio.title}</div>
        </div>
        <TechStack />
        <div className="links-container">links-container</div>
        <div className="description-container">
          <div dangerouslySetInnerHTML={{ __html: portfolio.content }} />
        </div>
        <div className="images-container">
          <FeaturedImage
            fluid={imgSrc(portfolio.media, 'fluid')}
            alt={portfolio.media.alt}
          />
        </div>
        <div className="get-in-touch"></div>
      </PortfolioWrapper>
    </Layout>
  );
};

export default Portfolio;
