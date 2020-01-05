const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
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

        #===========
        # POSTS DATA
        #===========
        posts: allWordpressPost {
          edges {
            node {
              id: wordpress_id
              title
              content
              excerpt
              date(formatString: "Do MMM YYYY HH:mm")
              slug
            }
          }
        }
      }
    `
  );

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

  /*===========================*/
  /*========== POSTS ==========*/
  /*===========================*/
  // // !!! uncomment code below if you need blogs pages

  // const posts = result.data.posts.edges;
  // const postsPerPage = 2;
  // const numberOfPages = Math.ceil(posts.length / postsPerPage);
  // const blogPostListTemplate = path.resolve(
  //   `./src/templates/blogPostList/index.js`
  // );

  // Array.from({ length: numberOfPages }).forEach((page, index) => {
  //   createPage({
  //     path: index === 0 ? `/blog` : `/blog/${index + 1}`,
  //     component: slash(blogPostListTemplate),
  //     context: {
  //       posts: posts.slice(
  //         index * postsPerPage,
  //         index * postsPerPage + postsPerPage
  //       ),
  //       numberOfPages,
  //       currentPage: index + 1,
  //     },
  //   });
  // });

  // const blogTemplate = path.resolve('./src/templates/blogPostList/blog.js');

  // posts.forEach(post => {
  //   createPage({
  //     path: `/post/${post.node.slug}`,
  //     component: slash(blogTemplate),
  //     context: post.node,
  //   });
  // });
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
