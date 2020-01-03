export const nodes = ({ edges }) => {
  const nodes = [];
  if (edges && edges.length) {
    edges.forEach(({ node }) => {
      if (node) nodes.push(node);
    });
  }
  return nodes;
};

export const imgSrc = (media, type) => {
  const { localFile } = media;
  let src = {};
  if (localFile && localFile.childImageSharp) {
    const sharp = localFile.childImageSharp;
    if (sharp[type]) src = sharp[type];
  }
  return src;
};
