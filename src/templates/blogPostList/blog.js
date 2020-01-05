import React from 'react';

const Blog = props => {
  return <div>{JSON.stringify(props.pageContext)}</div>;
};

export default Blog;
