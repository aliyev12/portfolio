import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { helpers } from 'utils';

const SOCIAL_MEDIA_LINKS = graphql`
  query SOCIAL_MEDIA_LINKS {
    socialMedia: allWordpressWpApiMenusMenusItems(
      filter: { slug: { eq: "social-media-links" } }
    ) {
      edges {
        node {
          items {
            id: wordpress_id
            title
            href: url
            slug: object_slug
          }
        }
      }
    }
  }
`;

const formatLinks = data => {
  const linksData = helpers.nodes(data);
  let links = [];
  if (
    linksData &&
    linksData.length &&
    linksData[0] &&
    linksData[0].items &&
    linksData[0].items.length &&
    Array.isArray(linksData[0].items)
  ) {
    linksData[0].items.forEach(item => links.push(item));
  }
  return links;
};

const SocialIcon = styled(IconButton)`
  svg {
    width: ${({ width }) => (width ? `${width}px` : '30px')};
    height: ${({ height }) => (height ? `${height}px` : '30px')};
    color: ${({ theme }) => theme.text};
  }
`;

export const Social = ({ width, height }) => {
  const data = useStaticQuery(SOCIAL_MEDIA_LINKS);
  const links = formatLinks(data.socialMedia);

  return (
    <React.Fragment>
      {links.map(link =>
        link.slug !== 'twitter' ? (
          <SocialIcon
            key={link.id}
            aria-label="delete"
            width={width}
            height={height}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            title={link.title}
          >
            {link.slug === 'github' && <GitHubIcon />}
            {link.slug === 'linkedin' && <LinkedInIcon />}
          </SocialIcon>
        ) : null
      )}
    </React.Fragment>
  );
};
