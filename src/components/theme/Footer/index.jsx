import React from 'react';
import { Container, Logo } from 'components/common';
import { Social } from '../../common';
import { Wrapper, Flex, Links, Details } from './styles';

export const Footer = () => {
  return (
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <Logo width="30" height="30" />
          <span className="copyright">
            © {new Date().getFullYear()} Copyright Abdul Aliyev{' '}
          </span>
        </Details>
        <Links>
          <Social width="30" height="30" />
        </Links>
      </Flex>
    </Wrapper>
  );
};
