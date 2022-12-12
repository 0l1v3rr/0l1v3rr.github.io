import { HiSpeakerWave, HiLockClosed } from "react-icons/hi2";
import { RiShutDownLine } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { useTimeFormat } from "../../hooks/useTimeFormat";
import kaliLogo from "../../assets/kali-dragon-icon.svg";
import terminalIcon from "../../assets/terminal.png";

const Tray = () => {
  const currentTime = useTimeFormat();

  return (
    <header
      className="w-full h-fit text-kali-white flex items-center 
        py-[.15rem] pr-2 bg-kali-gray-dark/[.65] select-none font-segoe 
        justify-between relative border-b border-solid border-kali-border/[.75] 
        shadow-lg text-sm"
    >
      <div className="flex items-center gap-2">
        <img
          src={kaliLogo}
          alt=""
          className="w-7 h-7 absolute cursor-pointer"
        />

        <div className="h-5 w-[.1rem] bg-kali-text-muted ml-9" />

        <img src={terminalIcon} alt="" className="w-5 h-5 cursor-pointer" />
      </div>

      <div
        className="w-fit h-fit absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 text-kali-gray"
      >
        {currentTime}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-kali-text-muted">
          <HiSpeakerWave />
        </span>

        <span className="text-[.8rem] cursor-pointer">
          <BsBellFill />
        </span>

        <div className="h-5 w-[.1rem] bg-kali-text-muted" />

        <span className="cursor-pointer">
          <HiLockClosed />
        </span>

        <span className="cursor-pointer rotate-90">
          <RiShutDownLine />
        </span>
      </div>
    </header>
  );
};

export default Tray;
