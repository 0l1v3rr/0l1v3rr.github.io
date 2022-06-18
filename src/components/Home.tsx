import { useState, useEffect } from "react";

import Command from "./Command";
import Prompt from "./Prompt";

const sleep = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

const Home = () => {
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
                <Prompt page="home" />
                <Command command="about" />
            </div>

            {isLoaded && <About />}
        </>
    );
}

const About = () => {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-gray-300">Hello!</span>

            <span className="text-gray-300">
                <span className="text-gray-200 font-bold">- About Me</span> <br />

                My name is <span className="text-lime-400">Olivér</span>, it's nice to e-meet you!<br />
                I'm a passionate <span className="text-lime-400">Full-Stack Developer</span> from <span className="text-lime-400">Hungary</span>.<br />
            </span>

            <span className="text-gray-300">
                <span className="text-gray-200 font-bold">- Languages I speak</span> <br />

                My ultimate choice is <span className="text-emerald-400">Java</span>, 
                but I love <span className="text-emerald-400">Go</span> as well. <br />
                On the client-side, I work with <span className="text-emerald-400">JavaScript </span>
                and <span className="text-emerald-400">TypeScript</span>. <br />
            </span>

            <span className="text-gray-300">
                <span className="text-gray-200 font-bold">
                    - Mentionable frameworks, libraries, and tools I use:
                </span> <br />

                <span className="underline">Backend</span>:&nbsp;
                <span className="text-yellow-300"> Spring</span>, 
                <span className="text-yellow-300"> Spring Boot</span>,
                <span className="text-yellow-300"> Gin</span>,
                <span className="text-yellow-300"> Gorm</span>
                <br />
                <span className="underline">Frontend</span>:
                <span className="text-yellow-300"> React</span>, 
                <span className="text-yellow-300"> Svelte </span>and
                <span className="text-yellow-300"> SvelteKit</span>,
                <span className="text-yellow-300"> Tailwind</span>
                <br />
                <span className="underline">Database</span>:
                <span className="text-yellow-300"> MySQL</span>, 
                <span className="text-yellow-300"> Postgres</span>
                <br />
                <span className="underline">Other</span>:&nbsp;&nbsp;&nbsp;
                <span className="text-yellow-300"> Docker</span>, 
                <span className="text-yellow-300"> Git</span>,
                <span className="text-yellow-300"> Maven</span>
            </span>

            <span className="text-gray-300">
                If you'd like to know more, please visit my socials or contact me! <br />
                Thanks!
            </span>
        </div>
    );
}

export default Home;