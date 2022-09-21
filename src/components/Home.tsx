import { useState, useEffect } from "react";

import Command from "./Command";
import Prompt from "./Prompt";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Home = () => {
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
        <Prompt page="home" />
        {cmdLoaded && <Command command="whoami" />}
      </div>

      {isLoaded && <About />}
    </>
  );
};

const About = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-300">Hello!</span>

      <span className="text-gray-300">
        <span className="text-gray-200 font-bold">- About Me</span> <br />
        My name is <span className="text-lime-400">Olivér</span>, great to see
        you here!
        <br />
        I'm a passionate{" "}
        <span className="text-lime-400">Full-Stack Developer</span> from{" "}
        <span className="text-lime-400">Hungary</span>.<br />
      </span>

      <span className="text-gray-300">
        <span className="text-gray-200 font-bold">- Languages I speak</span>{" "}
        <br />
        My ultimate choice is <span className="text-emerald-400">Java</span>,
        but I love <span className="text-emerald-400">Go</span> as well. <br />
        On the client-side, I prefer{" "}
        <span className="text-emerald-400">TypeScript</span>. <br />
      </span>

      <span className="text-gray-300">
        <span className="text-gray-200 font-bold">
          - Mentionable frameworks, libraries, and tools I use:
        </span>{" "}
        <br />
        <span className="underline">Backend</span>:&nbsp;
        <span className="text-yellow-300"> Spring</span>,
        <span className="text-yellow-300"> Spring Boot</span>,
        <span className="text-yellow-300"> Gin</span>
        <br />
        <span className="underline">Frontend</span>:
        <span className="text-yellow-300"> React</span>,
        <span className="text-yellow-300"> Svelte </span>and
        <span className="text-yellow-300"> SvelteKit</span>
        <br />
        <span className="underline">Other</span>:&nbsp;&nbsp;&nbsp;
        <span className="text-yellow-300"> Docker</span>,
        <span className="text-yellow-300"> MySQL</span>,
        <span className="text-yellow-300"> Postgres</span>
      </span>

      <span className="text-gray-300">
        If you'd like to know more, visit my{" "}
        <a
          target="_blank"
          href="https://github.com/0l1v3rr"
          className="underline"
        >
          GitHub
        </a>
        ! <br />
        Thanks!
      </span>
    </div>
  );
};

export default Home;
