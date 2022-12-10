import { AiOutlineAppstore } from "react-icons/ai";
import { HiSpeakerWave, HiLockClosed } from "react-icons/hi2";
import { RiShutDownLine } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { useTimeFormat } from "../../hooks/useTimeFormat";

const Tray = () => {
  const currentTime = useTimeFormat();

  return (
    <header
      className="w-full h-fit text-kali-white flex items-center 
        py-[.15rem] px-4 bg-kali-gray-dark/[.65] select-none font-segoe 
        justify-between relative border-b border-solid border-kali-border/[.75] 
        shadow-lg text-sm"
    >
      <div className="flex items-center gap-3">
        <AiOutlineAppstore />
        <span className="text-sm">Applications</span>
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

        <div className="h-4 w-[.1rem] bg-kali-text-muted" />

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
