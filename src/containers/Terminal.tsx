import Home from "../components/Home";

import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Terminal = () => {
    const { pathname } = useLocation();
    const [isFullScreen, setIsFullScreen] = useState(false);

    const container = useRef<HTMLDivElement>(null);

    const activeLinkClasses = "text-gray-200 text-sm mx-4 sm:mx-6 md:mx-10 py-3 cursor-pointer";
    const inactiveLinkClasses = `text-gray-400 text-sm mx-4 sm:mx-6 md:mx-10 py-3 cursor-pointer 
        hover:text-gray-300 transition-all duration-300`;

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
            <div className="flex items-center justify-center sm:justify-start border-b border-solid 
                border-gray-900 bg-white/[0.02]">
                <div className="hidden sm:flex gap-2 items-center p-4 pr-10">
                    <div className="block w-3 h-3 bg-red-600 transition-all hover:bg-red-500 
                        cursor-pointer duration-300 rounded-full border border-solid border-red-800" 
                        onClick={closeWindow} />
                    <div className="block w-3 h-3 bg-gray-700 transition-all hover:bg-gray-700 
                        duration-300 rounded-full border border-solid border-gray-900" />
                    {!isFullScreen && <div className="block w-3 h-3 bg-green-500 transition-all 
                        hover:bg-green-400 cursor-pointer duration-300 rounded-full border border-solid 
                        border-green-700" onClick={enterFullScreen} />}
                    {isFullScreen && <div className="block w-3 h-3 bg-green-500 transition-all 
                        hover:bg-green-400 cursor-pointer duration-300 rounded-full border border-solid 
                        border-green-700" onClick={exitFullScreen} />}
                </div>
                
                <div className="flex items-center justify-center">
                    <Link to="/">
                        <div className={pathname === "/" ? activeLinkClasses : inactiveLinkClasses}>
                            ../Home (-zsh)
                        </div>
                    </Link>

                    <Link to="/projects">
                        <div className={pathname === "/projects" ? activeLinkClasses : inactiveLinkClasses}>
                            ../Projects (-zsh)
                        </div>
                    </Link>

                    <Link to="/contact">
                        <div className={pathname === "/contact" ? activeLinkClasses : inactiveLinkClasses}>
                            ../Contact (-zsh)
                        </div>
                    </Link>
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