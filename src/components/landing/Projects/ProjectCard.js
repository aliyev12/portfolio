import React from 'react';
import { navigate } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image/withIEPolyfill';
import { imgSrc } from 'utils/helpers';
import styled from 'styled-components';
import { styles } from 'utils';

const StyledCard = styled(Card)`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.body} !important;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow} !important;

  .card-btn {
    .gatsby-image-wrapper {
      max-height: 40rem;
      display: flex;
      justify-content: center;

      img {
      }
    }

    .project-name {
      color: ${({ theme }) => theme.text};
      margin: 2rem 0;
    }
    .project-desc {
      color: ${({ theme }) => theme.text};
      font-size: 1.2rem;
      line-height: 2rem;
    }

    &::before {
      content: 'LEARN MORE';
      position: absolute;
      top: 73px;
      left: 0;
      right: 0;
      white-space: nowrap;
      margin-left: auto;
      margin-right: auto;
      font-size: 16px;
      font-weight: 900;
      letter-spacing: 1px;
      word-spacing: 3px;
      line-height: 1;
      opacity: 0.75;
      -webkit-font-smoothing: antialiased;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.5);
      color: rgba(255, 255, 255, 0.8);
      padding: 17px 18px;
      border-radius: 5px;
      width: 155px;
      opacity: 0;
      transition: ${styles.transition};
    }

    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }

  .card-action {
    button,
    a {
      color: ${({ theme }) => theme.text};
    }
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    width: 30rem;

    .card-btn {
      .gatsby-image-wrapper {
        max-height: 20rem;
        display: flex;
        justify-content: center;

        img {
          object-position: top !important;
        }
      }
    }
  }
`;

const ProjectCard = ({
  media,
  slug,
  title,
  shortDescription,
  projectUrl,
  isMonoRepo,
  mainRepo,
  frontendRepo,
  backendRepo,
}) => {
  return (
    <StyledCard className="card">
      <CardActionArea
        className="card-btn"
        onClick={() => navigate(`/portfolio/${slug}`)}
      >
        <Img
          fluid={imgSrc(media, 'fluid')}
          alt={media && media.alt ? media.alt : ''}
          objectPosition="top"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className="project-name"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="project-desc"
          >
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-action">
        {isMonoRepo ? (
          <Button
            href={mainRepo}
            rel="noopener noreferrer"
            target="_blank"
            size="small"
            color="primary"
            startIcon={<GitHubIcon />}
          >
            Main Repo
          </Button>
        ) : (
          <>
            <Button
              href={frontendRepo}
              rel="noopener noreferrer"
              target="_blank"
              size="small"
              color="primary"
              startIcon={<GitHubIcon />}
            >
              Frontend
            </Button>
            <Button
              href={backendRepo}
              rel="noopener noreferrer"
              target="_blank"
              size="small"
              color="primary"
              startIcon={<GitHubIcon />}
            >
              Backend
            </Button>
          </>
        )}

        <Button
          href={projectUrl}
          rel="noopener noreferrer"
          target="_blank"
          size="small"
          color="primary"
          startIcon={<LinkIcon />}
        >
          Site
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ProjectCard;
