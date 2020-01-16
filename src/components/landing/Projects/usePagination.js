import React from 'react';

const PER_PAGE = 8;

export default allProjects => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const getNumPages = () => Math.ceil(allProjects.length / PER_PAGE);

  const handlePageClick = page => {
    setCurrentPage(page);
    setTimeout(() => {
      const projectElement = document.getElementById('projects');
      if (projectElement)
        projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const getPaginatedProjects = () =>
    allProjects.slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE);

  return {
    paginatedProjects: getPaginatedProjects(),
    numPages: getNumPages(),
    currentPage,
    handlePageClick,
  };
};
