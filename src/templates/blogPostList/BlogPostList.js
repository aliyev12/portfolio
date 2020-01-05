import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Header } from 'components/theme';
import { Layout, SEO } from 'components/common';
import styled from 'styled-components';

const BlogPostListWrapper = styled.section``;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? '#eee' : 'white'};
`;

const PageNumber = styled(AniLink)`
  display: block;
  padding: 0.8rem 1.6rem;
`;

const BlogPostList = ({ pageContext }) => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BlogPostListWrapper>
        {pageContext.posts.map(({ node: post }) => {
          return (
            <div key={post.id}>
              <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
              <small>{post.date}</small>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <div>
                <AniLink fade to={`/post/${post.slug}`}>
                  Read more
                </AniLink>
              </div>
            </div>
          );
        })}
        <Pagination>
          {Array.from({ length: pageContext.numberOfPages }).map(
            (page, index) => {
              return (
                <PageNumberWrapper
                  key={index}
                  isCurrentPage={index + 1 === pageContext.currentPage}
                >
                  <PageNumber
                    fade
                    to={index === 0 ? `/blog` : `/blog/${index + 1}`}
                  >
                    {index + 1}
                  </PageNumber>
                </PageNumberWrapper>
              );
            }
          )}
        </Pagination>
      </BlogPostListWrapper>
    </Layout>
  );
};

export default BlogPostList;
