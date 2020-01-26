import React from 'react';
import { graphql } from 'gatsby';
import { PortfolioProvider } from './portfolioContext';
import Portfolio from './Portfolio';

export default props => {
  React.useEffect(() => {
    if (window.location.pathname !== '/') {
      setTimeout(() => {
        const header = document.getElementById('header');
        if (header) {
          header.scrollIntoView({ behavior: 'smooth' });
        }
      }, 40);
    }
  });

  return (
    <PortfolioProvider>
      <Portfolio {...props} />
    </PortfolioProvider>
  );
};

export const query = graphql`
  query PORTFOLIO($id: String) {
    # Project node
    portfolio: wordpressWpPortfolio(id: { eq: $id }) {
      id
      slug
      title
      excerpt
      content
      media: featured_media {
        url: source_url
        alt: alt_text
        details: media_details {
          width
          height
        }
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
        techStack: tech_stack
        weight
        additionalImages {
          imgName: post_title
          imgId: wordpress_id
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
