import { useState, useEffect } from "react";
import Command from "./Command";
import Prompt from "./Prompt";

import { SiCodersrank, SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import ContactForm from "./ContactForm";


const sleep = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

const Contact = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await sleep(510);
            setIsLoaded(true);
        })();
    });

    return (
        <>
            <div className="ml-2 mb-1">
                <Prompt page="contact" />
                <Command command="contact" />
            </div>

            {isLoaded && <ContactContent />}
        </>
    );
};

const ContactContent = () => {
    return (
        <div className="flex flex-col">
            <span className="text-gray-200 font-bold">Want to work together or have any questions?</span>
            <span className="text-gray-300">Here are my socials, but you can use the contact form if you'd like so.</span>

            <div className="flex gap-3 text-lg mt-2 items-center bg-white/[0.07] px-3 py-1 w-fit rounded-lg">
                <a className="text-gray-200 transition-all duration-300 hover:text-white" 
                    target="_blank" href="https://github.com/0l1v3rr">
                    <SiGithub />
                </a>

                <a className="text-blue-700 bg-white rounded-lg transition-all duration-300 
                    hover:text-blue-600" target="_blank" href="https://www.linkedin.com/in/0l1v3rr/">
                    <SiLinkedin />
                </a>

                <a className="text-red-500 transition-all duration-300 hover:text-red-400" 
                    target="_blank" href="mailto:oliver.mrakovics@gmail.com">
                    <SiGmail />
                </a>

                <a className="text-emerald-500 transition-all duration-300 
                    hover:text-emerald-400" target="_blank" href="https://profile.codersrank.io/user/0l1v3rr/">
                    <SiCodersrank />
                </a>
            </div>

            <span className="text-gray-200 font-bold mt-3">Contact Form</span>
            <span className="text-gray-300">Please fill all fields.</span>

            <ContactForm />
        </div>
    );
}

export default Contact;