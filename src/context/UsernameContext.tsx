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

  function handleUsernameChange(possibleUsername?: string | null) {
    const newUsername = possibleUsername || "root";
    setUsername(newUsername);
    document.title = `${newUsername}@kali: ~`;
  }

  return (
    <UsernameContext.Provider
      value={{ username, setUsername: handleUsernameChange }}
    >
      {children}
    </UsernameContext.Provider>
  );
};

export default UsernameContextProvider;
