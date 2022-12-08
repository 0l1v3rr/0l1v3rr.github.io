import { AiOutlineAppstore } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { HiSpeakerWave } from "react-icons/hi2";
import { RiShutDownLine } from "react-icons/ri";
import { useTimeFormat } from "../../hooks/useTimeFormat";

const Tray = () => {
  const currentTime = useTimeFormat();

  return (
    <header
      className="w-full h-fit text-kali-white flex items-center 
        py-1 px-4 bg-black/[.5] select-none font-segoe justify-between"
    >
      <div className="flex items-center gap-3 text-base">
        <AiOutlineAppstore />
        <span className="text-sm">Applications</span>
      </div>

      <div className="flex items-center text-sm">{currentTime}</div>

      <div className="flex items-center gap-3 text-base ml-5">
        <BsBatteryHalf />
        <HiSpeakerWave />
        <RiShutDownLine />
      </div>
    </header>
  );
};

export default Tray;
