import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'components/common';
import IntroBackgroundImg from './IntroBackgroundImg';
import { IntroWrapper, Main, Details, Thumbnail } from './styles';

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
    <IntroWrapper>
      <Main as={Container}>
        <Details>
          <h1 dangerouslySetInnerHTML={{ __html: siteMeta.name }} />
          <h2>{siteMeta.description}</h2>
        </Details>
        <Thumbnail>
          <IntroBackgroundImg />
        </Thumbnail>
      </Main>
    </IntroWrapper>
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
