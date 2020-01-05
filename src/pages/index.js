import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';

export default ({ data }) => {
  const pages = formatPages(data.pages);
  console.log('data from index = ', pages);

  return (
    <Layout>
      <SEO />
      <Intro />
      {pages.map(page => {
        if (page.slug === 'about') return <Skills key={page.id} {...page} />;
        if (page.slug === 'projects') return <Projects key={page.id} />;
        if (page.slug === 'contact') return <Contact key={page.id} />;
      })}
    </Layout>
  );
};

export const query = graphql`
  query PAGES {
    pages: allWordpressPage(sort: { fields: menu_order }) {
      edges {
        node {
          id: wordpress_id
          slug
          title
          content
          order: menu_order
          template
        }
      }
    }
  }
`;

function formatPages(pagesData) {
  const formattedPages = [];

  if (pagesData.edges && pagesData.edges.length) {
    pagesData.edges.forEach(({ node }) => {
      if (node) {
        const page = {
          id: '',
          slug: '',
          title: '',
          content: '',
          order: 0,
        };
        if (node.id) page.id = node.id;
        if (node.slug) page.slug = node.slug;
        if (node.title) page.title = node.title;
        if (node.content) page.content = node.content.trim();
        if (node.order) page.order = node.order;

        formattedPages.push(page);
      }
    });
  }

  return formattedPages;
}
