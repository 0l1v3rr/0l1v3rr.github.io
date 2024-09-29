import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface UsernameContextType {
  username: string;
  setUsername: (username: string) => void;
}

const UsernameContext = createContext<null | UsernameContextType>(null);

export function useUsernameContext() {
  const context = useContext(UsernameContext);

  if (!context) {
    throw new Error(
      "useUsernameContext must be used within a UsernameContextProvider"
    );
  }

  return context;
}

interface UsernameContextProviderProps extends PropsWithChildren {}

const UsernameContextProvider: FC<UsernameContextProviderProps> = ({
  children,
}) => {
  const [username, setUsername] = useState("root");

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export default UsernameContextProvider;
