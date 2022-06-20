import Home from "../components/Home";

import { Route, Routes, Link, useLocation } from "react-router-dom";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Terminal = () => {
    const { pathname } = useLocation();

    const activeLinkClasses = "text-gray-200 text-sm mx-4 sm:mx-6 md:mx-10 py-3 cursor-pointer";
    const inactiveLinkClasses = `text-gray-400 text-sm mx-4 sm:mx-6 md:mx-10 py-3 cursor-pointer 
        hover:text-gray-300 transition-all duration-300`;

    return (
        <div className="w-full h-full sm:rounded-lg bg-black/[.8] shadow-md
            shadow-black backdrop-blur-lg border border-solid border-gray-800 overflow-auto">
            <div className="flex items-center justify-center sm:justify-start border-b border-solid 
                border-gray-900 bg-white/[0.02]">
                <div className="hidden sm:flex gap-2 items-center p-4 pr-10">
                    <div className="block w-3 h-3 bg-red-600 transition-all hover:bg-red-500 
                        cursor-pointer duration-300 rounded-full"></div>
                    <div className="block w-3 h-3 bg-yellow-400 transition-all hover:bg-yellow-300 
                        cursor-pointer duration-300 rounded-full"></div>
                    <div className="block w-3 h-3 bg-green-500 transition-all hover:bg-green-400 
                        cursor-pointer duration-300 rounded-full"></div>
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