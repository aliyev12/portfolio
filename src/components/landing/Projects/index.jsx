import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ProjectsWrapper, Grid } from './styles';
import { nodes } from 'utils/helpers';
import ProjectCard from './ProjectCard';

export const PORTFOLIOS = graphql`
  query PORTFOLIOS {
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
        }
      }
    }
  }
`;

export const Projects = () => {
  const data = useStaticQuery(PORTFOLIOS);
  const portfolios = nodes(data.portfolios);

  return (
    <ProjectsWrapper id="projects">
      <main>
        <h1 className="project-page-title">Projects</h1>
        <Grid>
          {[...portfolios, ...portfolios, ...portfolios, ...portfolios].map(
            portfolio => (
              <ProjectCard key={portfolio.id} {...portfolio} />
            )
          )}
        </Grid>
      </main>
    </ProjectsWrapper>
  );
};
