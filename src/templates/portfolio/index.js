import React from 'react';
import { graphql } from 'gatsby';
import { PortfolioProvider } from './portfolioContext';
import Portfolio from './Portfolio';

export default props => (
  <PortfolioProvider>
    <Portfolio {...props} />
  </PortfolioProvider>
);

export const query = graphql`
  query PORTFOLIO($id: String) {
    portfolio: wordpressWpPortfolio(id: { eq: $id }) {
      id
      title
      content
      media: featured_media {
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
`;
