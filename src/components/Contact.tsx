import { useState, useEffect } from "react";
import Command from "./Command";
import Prompt from "./Prompt";

import { SiCodersrank, SiGithub, SiLinkedin, SiGmail, SiLeetcode } from 'react-icons/si';


const sleep = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

const Contact = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [cmdLoaded, setCmdLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await sleep(500);
            setCmdLoaded(true);
            await sleep(700);
            setIsLoaded(true);
        })();
    });

    return (
        <>
            <div className="ml-2 mb-1 flex items-start gap-1">
                <Prompt page="contact" />
                {cmdLoaded && <Command command="contact" />}
            </div>

            {isLoaded && <ContactContent />}
        </>
    );
};

const ContactContent = () => {
    return (
        <div className="flex flex-col">
            <span className="text-gray-200 font-bold">Want to work together or have any questions?</span>
            <span className="text-gray-300">Here are my socials: <span className="text-gray-400">(Click the icons)</span></span>

            <div className="flex gap-3 text-lg mt-2 items-center bg-white/[0.07] px-3 py-1 w-fit rounded-lg">
                <span className="text-gray-400 text-sm">GitHub: </span>
                <a className="text-gray-200 transition-all duration-300 hover:text-white" 
                    target="_blank" href="https://github.com/0l1v3rr">
                    <SiGithub />
                </a>
            </div>

            <div className="flex gap-3 text-lg mt-2 items-center bg-white/[0.07] px-3 py-1 w-fit rounded-lg">
                <span className="text-gray-400 text-sm">LinkedIn: </span>
                <a className="text-blue-700 bg-white rounded-lg transition-all duration-300 
                    hover:text-blue-600" target="_blank" href="https://www.linkedin.com/in/0l1v3rr/">
                    <SiLinkedin />
                </a>
            </div>

            <div className="flex gap-3 text-lg mt-2 items-center bg-white/[0.07] px-3 py-1 w-fit rounded-lg">
                <span className="text-gray-400 text-sm">Gmail: </span>
                <a className="text-red-500 transition-all duration-300 hover:text-red-400" 
                    target="_blank" href="mailto:oliver.mrakovics@gmail.com">
                    <SiGmail />
                </a>
            </div>

            <div className="flex gap-3 text-lg mt-2 items-center bg-white/[0.07] px-3 py-1 w-fit rounded-lg">
                <span className="text-gray-400 text-sm">CodersRank: </span>
                <a className="text-emerald-500 transition-all duration-300 
                    hover:text-emerald-400" target="_blank" href="https://profile.codersrank.io/user/0l1v3rr/">
                    <SiCodersrank />
                </a>
            </div>
        </div>
    );
}

export default Contact;