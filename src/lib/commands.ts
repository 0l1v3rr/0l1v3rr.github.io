import { Prompt } from "../types";

export const MOTD = `Welcome to 0l1v3rr.github.io!

GitHub:  &nbsp;&nbsp;<a href="https://github.com/0l1v3rr" target="_blank" rel="noopener noreferrer">https://github.com/0l1v3rr</a>
LinkedIn: <a href="https://linkedin.com/in/0l1v3rr" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/0l1v3rr</a>

Hello, I'm <b>Olivér Mrakovics</b>. I am a <b>full-stack</b> engineer specializing in front-end development.
In September 2024, I became a <b>world champion</b> in <b>web development</b>. 🥇

Type 'help' to see the available commands.`.replace(/\n/g, "<br/>");

const KALI_LOGO = `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replace(/ /g, "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replace(/ /g, "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replace(/ /g, "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replace(/ /g, "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replace(/ /g, "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replace(
        / /g,
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replace(/ /g, "&nbsp;")}</span>
      <span>${"                     ;XO,".replace(/ /g, "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replace(
        / /g,
        "&nbsp;"
      )}</span>
    </span>
  `;

const TECH_STACK = `<a href="https://github.com/0l1v3rr/github-readme-tech-stack" target="_blank"><img src="https://github-readme-tech-stack.vercel.app/api/cards?title=Tech+Stack&width=420&align=center&titleAlign=center&fontSize=20&lineHeight=10&lineCount=2&theme=0l1v3rr&line1=node.js%2Cnode.js%2Cauto%3Bexpress%2Cexpress%2Cffffff%3Bnestjs%2Cnestjs%2Ce12a54%3B&line2=react%2Creact%2Cauto%3Btailwindcss%2Ctailwind%2Cauto%3Btypescript%2Ctypescript%2Cauto%3B" alt="Tech Stack" /></a>`;

const COMMANDS: Record<string, (username: string, args: string[]) => string> = {
  su: () => "",
  whoami: (username) => username,
  motd: () => MOTD,
  pwd: () => "/",
  date: () => new Date().toLocaleDateString(),
  github: () => openLink("https://github.com/0l1v3rr"),
  linkedin: () => openLink("https://linkedin.com/in/0l1v3rr"),
  repo: () => openLink("https://github.com/0l1v3rr/0l1v3rr.github.io"),
  email: () => openLink("mailto:oliver.mrakovics@gmail.com"),
  cat: () =>
    `Here's a cute cat for you! 🐱<br/><br/>${openLink("https://cataas.com/cat/cute")}`,
  kali: () => KALI_LOGO,
  techstack: () => TECH_STACK,
  about: (username) => `Hello, ${username}!

    Passionate about <b>web development</b>, I am a <b>full-stack engineer</b> specializing in <b>front-end development</b>. I started my coding journey at the age of <b>12</b>, proving my dedication and expertise in the field.

    My focus on delivering high-quality applications is fueled by a genuine interest in leading technologies, particularly <b>React</b>, <b>TypeScript</b>, and <b>Node.js</b>. Leveraging hands-on experience with various JavaScript frameworks and libraries <b>(Next.js, Express, NestJS, etc.)</b> within the React and Node.js ecosystem, I bring a versatile skill set to every project.

    I also enjoy showing off my skills in <b>various competitions</b>. My most notable achievement is my participation in the prestigious <b>WorldSkills</b> competitions, where I won a <b>gold medal in Web Technologies category</b>, making me a <b>world champion</b>.`,
};

const COMMAND_NAMES = [...Object.keys(COMMANDS), "clear", "help"].sort((a, z) =>
  a.localeCompare(z)
);

export function getCommandResponse(
  { command, sudo, args }: Prompt,
  username: string
) {
  if (sudo && !command) return "Usage: sudo [command] [args]";
  if (!command) return "";

  if (command in COMMANDS) {
    let result = COMMANDS[command](username, args);
    if (command !== "kali") {
      result = result.replace(/\n/g, "<br/>");
    }

    return result;
  }

  if (command === "help") {
    return `Usage: [command] [options] 
    
      ${COMMAND_NAMES.join(", ")}`.replace(/\n/g, "<br/>");
  }

  return `${command}: command not found`;
}

function openLink(url: string) {
  setTimeout(() => window.open(url, "_blank")?.focus(), 1000);
  return `Redirecting to <a href="" target="_blank" rel="noreferrer noopener">${url}</a>...`;
}
