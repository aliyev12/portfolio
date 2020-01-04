import React, { useState } from 'react';

const PortfolioContext = React.createContext();

const PortfolioProvider = ({ children }) => {
  const [state, setState] = useState(null);
  return (
    <PortfolioContext.Provider value={[state, setState]}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };
