import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import { nodes } from '../../../utils/helpers';

export const PORTFOLIOS = graphql`
  query PORTFOLIOS {
    portfolios: allWordpressWpPortfolio {
      edges {
        node {
          id
          title
          excerpt
          content
          media: featured_media {
            url: source_url
            alt: alt_text
          }
        }
      }
    }
  }
`;

/*
title: "Draggable Color Palette"
excerpt: "<p>This is an app for creating custom color palettes. The app is built with ReactJS and uses React Drag-and-Drop library, Chroma.js, emoji picker, browser local storage and many other exciting technologies.</p>↵"
content: "↵<p>This is an app for creating custom color palettes. The app is built with ReactJS and uses React Drag-and-Drop library, Chroma.js, emoji picker, browser local storage and many other exciting technologies.</p>↵"
media:
url: "https://res.cloudinary.com/abdul-aliyev-portfolio/image/upload/v1578015367/draggable-color-palette-main_nfeo0s.png"
alt: "Draggable Color Palette Website Main Page"
*/

export const Projects = () => {
  const data = useStaticQuery(PORTFOLIOS);
  const portfolios = nodes(data.portfolios);
  console.log('portfolios = ', portfolios);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {portfolios.map(portfolio => (
          <Item key={portfolio.id}>
            {console.log('portfolio = ', portfolio)}
            <Card>
              <Content>
                <h4>{portfolio.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: portfolio.excerpt }} />
              </Content>
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
        ))}
      </Grid>
    </Wrapper>
  );
};

// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { Container, Card } from 'components/common'
// import starIcon from 'assets/icons/star.svg'
// import forkIcon from 'assets/icons/fork.svg'
// import { Wrapper, Grid, Item, Content, Stats } from './styles'

// export const Projects = () => {
//   const {
//     github: {
//       viewer: {
//         repositories: { edges },
//       },
//     },
//   } = useStaticQuery(
//     graphql`
//       {
//         github {
//           viewer {
//             repositories(
//               first: 8
//               orderBy: { field: STARGAZERS, direction: DESC }
//             ) {
//               edges {
//                 node {
//                   id
//                   name
//                   url
//                   description
//                   stargazers {
//                     totalCount
//                   }
//                   forkCount
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   return (
//     <Wrapper as={Container} id="projects">
//       <h2>Projects</h2>
//       <Grid>
//         {edges.map(({ node }) => (
//           <Item
//             key={node.id}
//             as="a"
//             href={node.url}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Card>
//               <Content>
//                 <h4>{node.name}</h4>
//                 <p>{node.description}</p>
//               </Content>
//               <Stats>
//                 <div>
//                   <img src={starIcon} alt="stars" />
//                   <span>{node.stargazers.totalCount}</span>
//                 </div>
//                 <div>
//                   <img src={forkIcon} alt="forks" />
//                   <span>{node.forkCount}</span>
//                 </div>
//               </Stats>
//             </Card>
//           </Item>
//         ))}
//       </Grid>
//     </Wrapper>
//   )
// }
