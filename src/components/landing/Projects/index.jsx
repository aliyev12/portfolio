import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ProjectsWrapper, Grid } from './styles';
import { nodes } from 'utils/helpers';
import ProjectCard from './ProjectCard';
import formatProjects from './formatProjects';
import usePagination from './usePagination';
import Pagination from './Pagination';

export const PORTFOLIOS = graphql`
  query PORTFOLIOS {
    # Portfolio Nodes
    portfolios: allWordpressWpPortfolio {
      edges {
        node {
          id
          slug
          title
          excerpt
          content
          media: featured_media {
            url: source_url
            alt: alt_text
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          acf {
            projectUrl
            isMonoRepo
            mainRepo
            frontendRepo
            backendRepo
            shortDescription
            addingAdditionalImages
            weight
            additionalImages {
              imgName: post_title
              imgId: wordpress_id
            }
          }
        }
      }
    }
    # Media Nodes
    media: allWordpressWpMedia {
      edges {
        node {
          wordpress_id
          title
          source_url
          alt_text
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

export const Projects = () => {
  const data = useStaticQuery(PORTFOLIOS);
  // Passing graphql data to formatting function that will shape data for projects
  const projects = formatProjects(nodes(data.portfolios), nodes(data.media));
  const {
    paginatedProjects,
    numPages,
    currentPage,
    handlePageClick,
  } = usePagination([...projects, ...projects, ...projects]);
  console.log('projects = ', projects);

  return (
    <ProjectsWrapper id="projects">
      <main>
        <h1 className="project-page-title">Projects</h1>
        <Grid>
          {paginatedProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Grid>
        <Pagination
          numPages={numPages}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </main>
    </ProjectsWrapper>
  );
};
