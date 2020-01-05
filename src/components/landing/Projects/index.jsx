import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import GitHubIcon from '@material-ui/icons/GitHub';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import LinkIcon from '@material-ui/icons/Link';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import { nodes, imgSrc } from 'utils/helpers';

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
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {portfolios.map(portfolio => {
          return (
            <Item key={portfolio.id}>
              <Card>
                <AniLink fade to={`/portfolio/${portfolio.slug}`}>
                  <Content>
                    <Img
                      fluid={imgSrc(portfolio.media, 'fluid')}
                      alt={portfolio.media.alt}
                    />

                    <h4>{portfolio.title}</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: portfolio.excerpt }}
                    />
                  </Content>
                </AniLink>
                <Stats>
                  <div>
                    <GitHubIcon />
                  </div>
                  <div>
                    <LinkIcon />
                  </div>
                </Stats>
              </Card>
            </Item>
          );
        })}
      </Grid>
    </Wrapper>
  );
};
// import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkIcon from '@material-ui/icons/Link';
// import { Container, Card } from 'components/common';
// import starIcon from 'assets/icons/star.svg';
// import forkIcon from 'assets/icons/fork.svg';
// import { Wrapper, Grid, Item, Content, Stats } from './styles';
// import { nodes, imgSrc } from '../../../utils/helpers';

// export const PORTFOLIOS = graphql`
//   query PORTFOLIOS {
//     portfolios: allWordpressWpPortfolio {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           content
//           media: featured_media {
//             url: source_url
//             alt: alt_text
//             localFile {
//               childImageSharp {
//                 fixed(width: 250) {
//                   ...GatsbyImageSharpFixed_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// /*
// title: "Draggable Color Palette"
// excerpt: "<p>This is an app for creating custom color palettes. The app is built with ReactJS and uses React Drag-and-Drop library, Chroma.js, emoji picker, browser local storage and many other exciting technologies.</p>↵"
// content: "↵<p>This is an app for creating custom color palettes. The app is built with ReactJS and uses React Drag-and-Drop library, Chroma.js, emoji picker, browser local storage and many other exciting technologies.</p>↵"
// media:
// url: "https://res.cloudinary.com/abdul-aliyev-portfolio/image/upload/v1578015367/draggable-color-palette-main_nfeo0s.png"
// alt: "Draggable Color Palette Website Main Page"
// */

// export const Projects = () => {
//   const data = useStaticQuery(PORTFOLIOS);
//   const portfolios = nodes(data.portfolios);
//   console.log('portfolios = ', portfolios);

//   return (
//     <Wrapper as={Container} id="projects">
//       <h2>Projects</h2>
//       <Grid>
//         {portfolios.map(portfolio => (
//           <Item key={portfolio.id}>
//             <Card>
//               <Img fixed={imgSrc(portfolio.media, 'fixed')} />
//               <Content>
//                 <h4>{portfolio.title}</h4>
//                 <div dangerouslySetInnerHTML={{ __html: portfolio.excerpt }} />
//               </Content>
//               <Stats>
//                 <div>
//                   <GitHubIcon />
//                 </div>
//                 <div>
//                   <LinkIcon />
//                 </div>
//               </Stats>
//             </Card>
//           </Item>
//         ))}
//       </Grid>
//     </Wrapper>
//   );
// };
