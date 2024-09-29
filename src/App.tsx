import Terminal from "./components/terminal/Terminal";
import UsernameContextProvider from "./context/UsernameContext";

const App = () => {
  return (
    <UsernameContextProvider>
      <Terminal />
    </UsernameContextProvider>
  );
};

export default App;
