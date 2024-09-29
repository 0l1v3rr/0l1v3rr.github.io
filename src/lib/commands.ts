import { Prompt } from "../types";

export const MOTD = `Welcome to 0l1v3rr.github.io!

GitHub:  &nbsp;&nbsp;<a href="https://github.com/0l1v3rr" target="_blank" rel="noopener noreferrer">https://github.com/0l1v3rr</a>
LinkedIn: <a href="https://linkedin.com/in/0l1v3rr" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/0l1v3rr</a>

Hello, I'm <b>Olivér Mrakovics</b>. I am a <b>full-stack</b> engineer specializing in front-end development.
In September 2024, I became a <b>world champion</b> in <b>web development</b>. 🥇

Type 'help' to see the available commands.

`.replace(/\n/g, "<br/>");

export function getCommandResponse({ command }: Prompt, username: string) {
  if (!command) return "";

  switch (command) {
    case "su":
      return " ";
    case "whoami":
      return username;
    default:
      return `${command}: command not found`;
  }
}
