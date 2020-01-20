import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { LinksWrapper } from './ProjectLinksStyles';

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
      className={`project-link-btn ${mobileText === 'site' && 'site'}`}
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
      {button('visit the website', 'site', projectUrl, OpenInNewIcon)}
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
