const commands: Map<string, string> = new Map<string, string>();

commands.set("motd", motdText());
commands.set("whoami", "root");
commands.set("pwd", "https://0l1v3rr.github.io/");

export const getCommandByName = (name: string): string => {
  name = name.trim().toLowerCase().split(" ")[0];

  return commands.get(name) || `${name}: command not found`;
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
