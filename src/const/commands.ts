import { projects } from "./projects";

const commands: Map<string, string> = new Map<string, string>();

commands.set("motd", motdText());
commands.set("whoami", "root");
commands.set("touch", "Why would you touch anything?");
commands.set("rm", "Why would you remove anything?");
commands.set("cat", "Here's a cute cat for you! 😊");
commands.set("about", aboutText());
commands.set("pwd", "/");
commands.set("projects", projectsText());
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

    I'm a passionate <span class="terminal-bold">Full-Stack Developer</span> from <span class="terminal-bold">Hungary</span>.
    <br>
    My ultimate language of choice is <span class="terminal-bold">Java</span>, but I love <span class="terminal-bold">Go</span> as well.
    <br>
    On the client-side, I prefer <span class="terminal-bold">TypeScript</span>.

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
        let projectCategory = "fullstack";
        switch (project.category) {
          case "backend":
            projectCategory = "backend";
            break;
          case "frontend":
            projectCategory = "frontend";
            break;
          case "other":
            projectCategory = "other";
            break;
        }

        return `
        <a 
          class="project-${projectCategory}"
          href="${project.link}"
          target="_blank"
          rel="noreferrer"
        >${project.name}</a>`;
      })
      .join("&nbsp;&nbsp;&nbsp;")}
  `;
}
