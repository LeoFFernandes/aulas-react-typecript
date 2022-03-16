import { createContext, useCallback, useEffect, useState } from "react";

interface IUserLoggedContextData {
  UserName: string;
  logout: () => void;
}

export const UserLoggedContext = createContext<IUserLoggedContextData>(
  {} as IUserLoggedContextData
);

export const UserLoggedProvider: React.FC = ({ children }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setName("Leonardo");
    }, 300);
  });

  const handleLogout = useCallback(() => {
    console.log("logout");
  }, []);
  return (
    <UserLoggedContext.Provider
      value={{ UserName: name, logout: handleLogout }}
    >
      {children}
    </UserLoggedContext.Provider>
  );
};
