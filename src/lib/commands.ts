import { Prompt } from "../types";

export const MOTD = `Welcome to 0l1v3rr.github.io!

GitHub:  &nbsp;&nbsp;<a href="https://github.com/0l1v3rr" target="_blank" rel="noopener noreferrer">https://github.com/0l1v3rr</a>
LinkedIn: <a href="https://linkedin.com/in/0l1v3rr" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/0l1v3rr</a>

Hello, I'm <b>Olivér Mrakovics</b>. I am a <b>full-stack</b> engineer specializing in front-end development.
In September 2024, I became a <b>world champion</b> in <b>web development</b>. 🥇

Type 'help' to see the available commands.

`.replace(/\n/g, "<br/>");

const COMMANDS: Record<string, (username: string, args: string[]) => string> = {
  su: () => "",
  whoami: (username) => username,
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
    return COMMANDS[command](username, args).replace(/\n/g, "<br/>");
  }

  if (command === "help") {
    return `Usage: [command] [options] 
    
      ${COMMAND_NAMES.join(", ")}`.replace(/\n/g, "<br/>");
  }

  return `${command}: command not found`;
}
