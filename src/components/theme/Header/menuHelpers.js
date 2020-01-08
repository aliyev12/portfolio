export const formatMenu = items => {
  const menuItems = [];

  if (items.edges && items.edges.length) {
    const { node } = items.edges[0];
    if (node && node.items && node.items.length) {
      node.items.forEach(el => {
        const item = {
          id: '',
          title: '',
          href: '',
          slug: '',
        };
        if (el.id) item.id = el.id;
        if (el.title) item.title = el.title;
        if (el.href) item.href = el.href;
        if (el.slug) item.slug = el.slug;
        menuItems.push(item);
      });
    }
  }
  return menuItems;
};
