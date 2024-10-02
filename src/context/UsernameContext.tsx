import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
  const [username, setUsername] = useLocalStorage("username", "root");

  function handleUsernameChange(possibleUsername?: string | null) {
    const newUsername = possibleUsername || "root";
    setUsername(newUsername);
  }

  useEffect(() => {
    document.title = `${username}@kali: ~`;
  }, [username]);

  return (
    <UsernameContext.Provider
      value={{ username, setUsername: handleUsernameChange }}
    >
      {children}
    </UsernameContext.Provider>
  );
};

export default UsernameContextProvider;
