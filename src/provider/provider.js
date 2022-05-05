import React from "react";
import UserContext from "../context/context";

const defaultUser = {
  name: "Usuário ",
};
// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  return (
  <UserContext.Provider value={{userDefault: defaultUser}}> 
    {children}</UserContext.Provider>
  );
};
export default AppProvider;
