import React from 'react';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import { Layout, SEO } from 'components/common';
import styled from 'styled-components';
import TechStack from './TechStack';
import ProjectLinks from './ProjectLinks';
import { imgSrc } from 'utils/helpers';
import { formatProject } from '../../components/landing/Projects/formatProjects';
import { helpers, styles } from 'utils';

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
    margin: 0 5rem;
    max-width: 100rem;

    .page-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4rem 0 2rem 0;

      .title {
        color: ${({ theme }) => theme.text};
      }
    }
    .short-description {
      font-size: 1.6rem;
      margin: 3rem 0;
    }
    .tech-stack-container {
    }
    .description-container {
    }
    .images-container {
    }
    .get-in-touch {
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
          <TechStack techStack={project.techStack} />
          <h3 className="short-description">{project.shortDescription}</h3>
          <ProjectLinks />
          <div className="images-container">
            <FeaturedImage
              fluid={imgSrc(portfolio.media, 'fluid')}
              alt={portfolio.media.alt}
            />
          </div>
          <div className="description-container">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
          <div className="get-in-touch"></div>
        </div>
      </PortfolioWrapper>
    </Layout>
  );
};

export default Portfolio;
