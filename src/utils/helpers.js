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

/*
Unique Items Algoritm:
  Pass an array as first arg and array of strings for each level of a nested obj prop
  Example: 
  const someObjOne = {
    propOne: {
      propTwo: 'test'
    }
  };
  const someObjTwo = {
    propOne: {
      propTwo: 'test'
    }
  };
  const arrOfObjs = [someObjOne, someObjTwo];
  const unique = getUniqueItems(arrOfObjs, ['propOne', 'propTwo']);
  // This will return: [{ propOne: { propTwo: 'test' } }] with only one item
  // because propTwo is "test" in both objects.
*/
export const getUniqueItems = (items, nestedProps) => {
  const uniqueItems = {};
  return items.filter(item => {
    let uniqueItem = item;
    nestedProps.forEach(nestedProp => {
      uniqueItem = uniqueItem[nestedProp];
    });
    if (uniqueItems[uniqueItem]) {
      return false;
    } else {
      uniqueItems[uniqueItem] = true;
      return true;
    }
  });
};

export const sortArrObj = (arr, prop) =>
  arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
