const path = require(`path`);
const slash = require(`slash`);

let portfoliosQuery = '';
if (process.env.DATA_SOURCE === 'wordpress') {
  portfoliosQuery = `
  query {
    #================
    # PORTFOLIOS DATA
    #================
    portfolios: allWordpressWpPortfolio {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(portfoliosQuery);

  const portfolioTemplate = path.resolve('./src/templates/portfolio/index.js');

  /*================================*/
  /*========== PORTFOLIOS ==========*/
  /*================================*/
  result.data.portfolios.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}/`,
      component: slash(portfolioTemplate),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    });
  });
};

// This config will make it so that I can import folders directly in src like node modules
// For example, no matter where in folder structure you are, this is how you import Layout:
// import { Layout } from 'components/common';
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
