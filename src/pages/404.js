import React from 'react';
import { Link } from 'gatsby';
import { Layout, SEO } from 'components/common';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <h1>NOT FOUND</h1>
    <p>
      Sorry, this route doesn&#39;t exist. Please, go back to the{' '}
      <Link to="/">main page</Link>. Thanks!
    </p>
  </Layout>
);
