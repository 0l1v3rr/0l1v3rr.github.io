import Tray from "./components/kali/Tray";
import Main from "./components/layout/Main";
import TerminalContainer from "./components/terminal/TerminalContainer";

const App = () => {
  return (
    <div
      className="w-screen h-screen overflow-hidden bg-kali bg-cover 
        bg-center flex items-center justify-start flex-col gap-6"
    >
      <Tray />

      <Main>
        <TerminalContainer />
      </Main>
    </div>
  );
};

export default App;
