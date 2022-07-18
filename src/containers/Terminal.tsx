import Home from "../components/Home";

import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Terminal = () => {
    const { pathname } = useLocation();
    const [isFullScreen, setIsFullScreen] = useState(false);

    const container = useRef<HTMLDivElement>(null);

    const link = `text-sm sm:px-8 md:px-10 lg:px-16 px-5 cursor-pointer border-solid border-t-0`;
    const activeLinkClasses = `${link} text-gray-200 py-3 border-l border-r border-gray-800 `;
    const inactiveLinkClasses = `${link} text-gray-400 pt-3 pb-[11px] hover:text-gray-300 transition-text-color 
        duration-300 bg-white/[0.02] border-b border-gray-800`;

    useEffect(() => {
        container!.current!.onfullscreenchange = (e) => setIsFullScreen(current => !current);
    });

    const enterFullScreen = () => {
        if(container?.current?.requestFullscreen) {
            container?.current?.requestFullscreen();
        }
    };

    const exitFullScreen = () => {
        if(document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    };

    const closeWindow = () => {
        container?.current?.classList.add('scale-0');
        container?.current?.classList.add('translate-y-full');
    };

    return (
        <div ref={container} className="w-full h-full sm:rounded-lg bg-black/[.8] shadow-md
            shadow-black backdrop-blur-lg border border-solid border-gray-800 overflow-auto
            transition-all duration-300">
            <div className="flex items-center justify-center sm:justify-start border-solid 
                border-gray-900 w-full">
                <div className="hidden sm:flex gap-2 items-center justify-center px-4 py-[15.5px] pr-10 
                    bg-white/[0.02] border-b border-solid border-gray-800">
                    <div className="block w-3 h-3 bg-red-500 transition-all hover:bg-red-400 
                        cursor-pointer duration-300 rounded-full border border-solid border-red-800" 
                        onClick={closeWindow} />
                    <div className="block w-3 h-3 bg-yellow-400 transition-all hover:bg-yellow-200 
                        duration-300 rounded-full border border-solid border-yellow-600 cursor-pointer" />
                    {!isFullScreen && <div className="block w-3 h-3 bg-green-500 transition-all 
                        hover:bg-green-400 cursor-pointer duration-300 rounded-full border border-solid 
                        border-green-700" onClick={enterFullScreen} />}
                    {isFullScreen && <div className="block w-3 h-3 bg-green-500 transition-all 
                        hover:bg-green-400 cursor-pointer duration-300 rounded-full border border-solid 
                        border-green-700" onClick={exitFullScreen} />}
                </div>
                
                <div className="flex items-center justify-center w-full">
                    <Link to="/">
                        <div className={pathname === "/" ? activeLinkClasses : inactiveLinkClasses}>
                            ../home (-zsh)
                        </div>
                    </Link>

                    <Link to="/projects">
                        <div className={pathname === "/projects" ? activeLinkClasses : inactiveLinkClasses}>
                            ../projects (-zsh)
                        </div>
                    </Link>

                    <Link to="/contact">
                        <div className={pathname === "/contact" ? activeLinkClasses : inactiveLinkClasses}>
                            ../contact (-zsh)
                        </div>
                    </Link>

                    <div className="text-gray-600 w-100 text-sm pt-8 pb-[11px]
                        bg-white/[0.02] border-b border-solid border-gray-800 flex-grow" />
                </div>
            </div>

            <div className="font-mono font-thin px-3 py-1.5 text-sm">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
};

export default Terminal;