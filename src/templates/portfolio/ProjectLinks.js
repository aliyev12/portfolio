import React from 'react';
import styled from 'styled-components';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { styles } from 'utils';

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 0;
  .project-link-btn {
    background-color: ${styles.colors.mainBlue};
    color: ${styles.colors.mainWhite};
    transition: ${styles.transition};
    margin: 1rem 0;

    .desktop {
      display: inline;
    }
    .mobile {
      display: none;
    }

    &:hover {
      color: ${styles.colors.mainBlack};
    }
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    flex-direction: row;
    .project-link-btn {
      .desktop {
        display: none;
      }
      .mobile {
        display: inline;
      }
    }
  }
  @media (min-width: ${styles.breakpoints.md}) {
    flex-direction: row;
    margin: 3rem 0;

    .project-link-btn {
      .desktop {
        display: inline;
      }
      .mobile {
        display: none;
      }
    }
  }
`;

const ProjectLinks = ({
  projectUrl,
  isMonoRepo,
  mainRepo,
  frontendRepo,
  backendRepo,
}) => {
  const button = (desktopText, mobileText, href, Icon) => (
    <Button
      variant="contained"
      size="large"
      className="project-link-btn"
      startIcon={<Icon />}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="desktop">{desktopText}</span>
      <span className="mobile">{mobileText}</span>
    </Button>
  );

  return (
    <LinksWrapper>
      {button('Visit the website', 'Site', projectUrl, OpenInNewIcon)}
      {isMonoRepo ? (
        button('Github Repo', 'Repo', mainRepo, GitHubIcon)
      ) : (
        <>
          {button('Frontend Github Repo', 'Client', frontendRepo, GitHubIcon)}
          {button('Backend Github Repo', 'Server', backendRepo, GitHubIcon)}
        </>
      )}
    </LinksWrapper>
  );
};

export default ProjectLinks;
