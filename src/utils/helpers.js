export const nodes = ({ edges }) => {
  const nodes = [];
  if (edges && edges.length) {
    edges.forEach(({ node }) => {
      if (node) nodes.push(node);
    });
  }
  return nodes;
};
