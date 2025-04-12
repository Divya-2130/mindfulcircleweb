
import React, { createContext } from 'react';
import Yogo from '../Components/Assets/Yogo';
import Other from '../Components/Assets/Other';
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const contextValue = {Yogo,Other};

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
