import { navigate } from 'gatsby';

export default () => {
  const scrollToHashId = () => {
    if (window.location.pathname === '/') {
      const hash = window.location.hash;
      const sectionId = hash ? hash : '#header';
      const page = document.querySelector(sectionId);
      const smooth = { behavior: 'smooth', block: 'start' };
      if (page) {
        setTimeout(() => {
          page.scrollIntoView();
        }, 50);
      }
    }
  };

  const onHashChange = () => {
    scrollToHashId();
  };

  const navigateTo = pageName => {
    if (pageName === 'top') {
      const header = document.querySelector('#header');
      header.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState('', document.title, window.location.pathname);
    } else {
      if (window.location.pathname === '/') {
        const page = document.querySelector(pageName);
        if (page) {
          page.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            window.location.hash = pageName;
          }, 700);
        }
      } else {
        navigate(`/${pageName}`);
      }
    }
  };

  return { onHashChange, scrollToHashId, navigateTo };
};
