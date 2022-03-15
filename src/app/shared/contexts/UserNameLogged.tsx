import { createContext, useCallback } from "react";

interface IUserLoggedContextData {
  UserName: string;
    logout: () => void;
}

export const UserLoggedContext = createContext<IUserLoggedContextData>(
  {} as IUserLoggedContextData
);

export const UserLoggedProvider: React.FC = ({ children }) => {
    const handleLogout = useCallback(()=> {
        console.log('logout');
    }, [])
  return (
    <UserLoggedContext.Provider value={{ UserName: '', logout: handleLogout}}>
      {children}
    </UserLoggedContext.Provider>
  );
};
