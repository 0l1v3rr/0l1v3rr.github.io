import { projects } from "./projects";

const commands: Map<string, string> = new Map<string, string>();

commands.set("motd", motdText());
commands.set("whoami", "root");
commands.set("touch", "Why would you touch anything?");
commands.set("rm", "Why would you remove anything?");
commands.set("cat", "Here's a cute cat for you! 😊");
commands.set("about", aboutText());
commands.set("pwd", "/");
commands.set("date", new Date().toLocaleString());
commands.set("projects", projectsText());
commands.set("kali", kaliLogo());
commands.set("ls", projectsText());
commands.set("github", openLink("https://github.com/0l1v3rr"));
commands.set("linkedin", openLink("https://www.linkedin.com/in/0l1v3rr"));
commands.set("repo", openLink("https://github.com/0l1v3rr/0l1v3rr.github.io"));
commands.set("email", openLink("mailto:oliver.mrakovics@gmail.com"));
commands.set(
  "codersrank",
  openLink("https://profile.codersrank.io/user/0l1v3rr/")
);
commands.set(
  "socials",
  "Usage: [command]<br><br>github, linkedin, email, codersrank"
);
commands.set("help", helpText());

export const getCommandByName = (name: string): string => {
  name = name.trim().toLowerCase().split(" ")[0];

  // commands that require redirecting
  switch (name) {
    case "github":
      window.open("https://github.com/0l1v3rr", "_blank");
      break;
    case "repo":
      window.open("https://github.com/0l1v3rr/0l1v3rr.github.io", "_blank");
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/in/0l1v3rr", "_blank");
      break;
    case "email":
      window.open("mailto:oliver.mrakovics@gmail.com", "_blank");
      break;
    case "codersrank":
      window.open("https://profile.codersrank.io/user/0l1v3rr/", "_blank");
      break;
    case "cat":
      window.open("https://cataas.com/cat/cute", "_blank");
      break;
  }

  return commands.get(name) || `${name}: command not found`;
};

export const getCommandNames = (): string[] => {
  const commandNames: string[] = ["clear"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return commandNames.sort();
};

export function motdText(): string {
  return `
    Welcome to 0l1v3rr.github.io!<br>

    <br>&nbsp;* GitHub: 
    <a class="terminal-link" href="https://github.com/0l1v3rr" target="_blank" rel="noreferrer">
      https://github.com/0l1v3rr
    </a>

    <br>&nbsp;* Repo: 
    <a class="terminal-link" href="https://github.com/0l1v3rr/0l1v3rr.github.io" target="_blank" rel="noreferrer">
      https://github.com/0l1v3rr/0l1v3rr.github.io
    </a>

    <br>
    <br>&nbsp;* Type 'help' to see the list of available commands.
  `;
}

function helpText(): string {
  const commandNames: string[] = ["clear", "help"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return `
    Usage: [command] [options]
    <br>
    <br>

    ${commandNames.sort().join(", ")}
  `;
}

function aboutText(): string {
  return `
    Hello, root!
    <br><br>

    I'm a passionate <span class="terminal-bold">Full-Stack Web Developer</span> from <span class="terminal-bold">Hungary</span>.
    <br>
    Most of the time, I work with <span class="terminal-bold">Java</span> and <span class="terminal-bold">TypeScript</span>.
    However, I often choose <span class="terminal-bold">Go</span> when it comes to building personal projects.

    <br><br>
    Mentionable frameworks I work with:
    <br>
    &nbsp; * <span class="terminal-bold">Backend</span>: Spring, Spring Boot, JPA
    <br>
    &nbsp; * <span class="terminal-bold">Frontend</span>: React, Tailwind
    <br><br>

    Would you like to connect with me? Enter the 'socials' command!<br>
    Want to take a look at my projects? 
    Enter the 'projects' command or visit my GitHub with the 'github' command!
  `;
}

function openLink(link: string): string {
  return `
    Redirecting to 
      <a class="terminal-link" href="${link}" target="_blank" rel="noreferrer">
        ${link}</a>...
    `;
}

function projectsText(): string {
  return `
    ${projects
      .map((project) => {
        return `
        <a 
          class="project-${project.category}"
          href="${project.link}"
          target="_blank"
          rel="noreferrer"
        >${project.name}</a>`;
      })
      .join("&nbsp;&nbsp;&nbsp;")}
  `;
}

function kaliLogo() {
  return `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replaceAll(" ", "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replaceAll(" ", "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replaceAll(" ", "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replaceAll(" ", "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                     ;XO,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
    </span>
  `;
}
