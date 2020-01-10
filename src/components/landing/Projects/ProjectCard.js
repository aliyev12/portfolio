import React from 'react';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import { nodes, imgSrc } from 'utils/helpers';
import styled, { ThemeConsumer } from 'styled-components';
import { styles } from 'utils';

const StyledCard = styled(Card)`
  width: 100%;
  background-color: ${({ theme }) => theme.body} !important;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow} !important;

  .card-btn {
    .project-name {
      color: ${({ theme }) => theme.text};
      margin: 2rem 0;
    }
    .project-desc {
      color: ${({ theme }) => theme.text};
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }

  .card-action {
    button {
      color: ${({ theme }) => theme.text};
    }
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    width: 30rem;
  }
`;

const ProjectCard = ({ media, slug, title }) => {
  console.log('media = ', media);
  return (
    <StyledCard className="card">
      <CardActionArea
        className="card-btn"
        onClick={() => navigate(`/portfolio/${slug}`)}
      >
        <Img fluid={imgSrc(media, 'fluid')} alt={media.alt} />
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-action">
        <Button size="small" color="primary" startIcon={<GitHubIcon />}>
          Frontend
        </Button>
        <Button size="small" color="primary" startIcon={<GitHubIcon />}>
          Backend
        </Button>
        <Button size="small" color="primary" startIcon={<LinkIcon />}>
          site
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ProjectCard;
