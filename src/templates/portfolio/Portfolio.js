import React from 'react';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image/withIEPolyfill';
import { Layout, SEO } from 'components/common';
import TechStack from './TechStack';
import Chips from './Chips';
import ProjectLinks from './ProjectLinks';
import { imgSrc } from 'utils/helpers';
import { formatProject } from '../../components/landing/Projects/formatProjects';
import { helpers } from 'utils';
import { PortfolioWrapper, ImgPaper } from './PortfolioStyles';
import Carousel from './Carousel';

const containerWidth = 900;

const Portfolio = ({ data: { portfolio, media } }) => {
  const project = formatProject(portfolio, helpers.nodes(media));
  console.log('project = ', project);

  return (
    <Layout>
      <SEO />
      <PortfolioWrapper containerWidth={containerWidth}>
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
          <ProjectLinks {...project} />
          <ImgPaper elevation={3}>
            <Carousel
              featuredMedia={project.media}
              additionalExist={project.addingAdditionalImages}
              additionalImages={project.additionalImages}
            />
            {/* <Img
              fluid={imgSrc(portfolio.media, 'fluid')}
              alt={portfolio.media.alt}
            /> */}
          </ImgPaper>
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
