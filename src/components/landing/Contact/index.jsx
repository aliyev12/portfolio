import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact-me-img.svg';
import { ContactWrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <ContactWrapper as={Container} id="contact">
    <Details>
      <h1 className="contact-page-title">Contact Me</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="Envelope" />
    </Thumbnail>
  </ContactWrapper>
);
