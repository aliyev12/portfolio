import React from 'react';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import { Layout, SEO } from 'components/common';
import styled from 'styled-components';
import TechStack, { Chips } from './TechStack';
import ProjectLinks from './ProjectLinks';
import { imgSrc } from 'utils/helpers';
import { formatProject } from '../../components/landing/Projects/formatProjects';
import { helpers, styles } from 'utils';

const containerWidth = 900;

const FeaturedImage = styled(Img)`
  margin: 1.6rem 0;
`;

const PortfolioWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .main-content {
    margin: 0 1.5rem;
    max-width: ${containerWidth}px;

    .page-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4rem 0 0 0;

      .title {
        color: ${({ theme }) => theme.text};
        font-size: 3rem;
      }
    }
    .short-description {
      line-height: 2;
      font-size: 1.6rem;
      margin: 2rem 0 0;
    }

    .description-container {
      margin: 3rem 0;
      font-size: 1.6rem;
      line-height: 2;

      h3 {
        text-align: center;
      }

      p {
        margin-bottom: 2rem;
      }

      ul {
        margin-left: 4rem;
        margin-bottom: 2rem;
      }
    }
    .images-container {
      margin: 2rem 0;

      .gatsby-image-wrapper {
        border: 1px solid ${styles.colors.mainBlue};
        border-radius: 0.5rem;
      }
    }

    .chips-container {
      display: flex;
      margin-top: 3rem;
    }
    .get-in-touch {
    }
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    .main-content {
      margin: 0 3rem;
    }
  }

  @media (min-width: ${styles.breakpoints.md}) {
    .main-content {
      margin: 0 5rem;
      .page-title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem 0 2rem 0;

        .title {
          color: ${({ theme }) => theme.text};
          font-size: 6rem;
        }
      }

      .short-description {
        line-height: 2.5;
        margin: 5rem 0 3rem 0;
      }

      .description-container {
        line-height: 2.5;
        margin: 6rem 0;

        ul {
          margin-left: 8rem;
        }
      }

      .chips-container {
        display: none;
      }
    }
  }
`;

const Portfolio = ({ data: { portfolio, media } }) => {
  const project = formatProject(portfolio, helpers.nodes(media));
  console.log('project = ', project);

  return (
    <Layout>
      <SEO />
      <PortfolioWrapper>
        <div className="main-content">
          <div className="page-title">
            <Typography variant="h1" gutterBottom className="title">
              {portfolio.title}
            </Typography>
          </div>
          <TechStack
            techStack={project.techStack}
            containerWidth={containerWidth}
          />
          <h3 className="short-description">{project.shortDescription}</h3>
          <ProjectLinks />
          <div className="images-container">
            <FeaturedImage
              fluid={imgSrc(portfolio.media, 'fluid')}
              alt={portfolio.media.alt}
            />
          </div>
          <div className="description-container">
            <h3>About {portfolio.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
          <div className="chips-container">
            <Chips stack={project.techStack} specialClass="mobile-chips" />
          </div>

          <div className="get-in-touch"></div>
        </div>
      </PortfolioWrapper>
    </Layout>
  );
};

export default Portfolio;
