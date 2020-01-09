import React from 'react';
import { Container } from 'components/common';
import SkillsBackgroundImg from './SkillsBackgroundImg';
import { SkillsWrapper, SkillsMain, Details, Thumbnail } from './styles';

export const Skills = ({ title, content, order, slug, id }) => {
  return (
    <SkillsWrapper id="about">
      <SkillsMain as={Container}>
        <Thumbnail>
          <SkillsBackgroundImg title="About Me Illustration" />
        </Thumbnail>
        <Details>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Details>
      </SkillsMain>
    </SkillsWrapper>
  );
};
