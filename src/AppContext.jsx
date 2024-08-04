import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useAppApi = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [list, setList] = useState([]);
  return (
    <GlobalContext.Provider value={{ list, setList }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
