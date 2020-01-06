import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const SITE_META = graphql`
  query SITE_META {
    siteMeta: allWordpressSiteMetadata {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;

export const Intro = () => {
  const data = useStaticQuery(SITE_META);
  const siteMeta = formatSiteMeta(data.siteMeta);

  return (
    <Wrapper style={{ border: '2px solid blue' }}>
      <IntroWrapper as={Container} style={{ border: '2px solid pink' }}>
        <Details>
          <h1 dangerouslySetInnerHTML={{ __html: siteMeta.name }} />
          <h4>{siteMeta.description}</h4>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt={siteMeta.description} />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

function formatSiteMeta(data) {
  const { edges } = data;
  const meta = {
    name: '',
    description: '',
  };
  if (edges && edges.length) {
    const { node } = edges[0];
    if (node.name) meta.name = node.name;
    if (node.description) meta.description = node.description;
  }
  return meta;
}
