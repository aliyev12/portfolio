import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = ({ title, content, order, slug, id }) => {
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
