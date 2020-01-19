import React from 'react';
import styled from 'styled-components';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { styles } from 'utils';

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  .project-link-btn {
    background-color: ${styles.colors.mainBlue};
    color: ${styles.colors.mainWhite};
    transition: ${styles.transition};

    &:hover {
      color: ${styles.colors.mainBlack};
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
  const button = (text, href, Icon) => (
    <Button
      variant="contained"
      size="large"
      className="project-link-btn"
      startIcon={<Icon />}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </Button>
  );

  return (
    <LinksWrapper>
      {button('Visit the website', projectUrl, OpenInNewIcon)}
      {isMonoRepo ? (
        button('Github Repo', mainRepo, GitHubIcon)
      ) : (
        <>
          {button('Frontend Github Repo', frontendRepo, GitHubIcon)}
          {button('Backend Github Repo', backendRepo, GitHubIcon)}
        </>
      )}
    </LinksWrapper>
  );
};

export default ProjectLinks;
