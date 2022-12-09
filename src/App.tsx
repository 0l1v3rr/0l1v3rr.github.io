import Tray from "./components/kali/Tray";
import TerminalContainer from "./components/terminal/TerminalContainer";

const App = () => {
  return (
    <div
      className="w-screen h-screen overflow-hidden bg-kali bg-cover 
        bg-center flex items-center justify-start flex-col gap-6"
    >
      <Tray />

      <main className="h-[86%] w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
        <TerminalContainer />
      </main>
    </div>
  );
};

export default App;
