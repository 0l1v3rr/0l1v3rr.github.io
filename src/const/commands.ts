const commands: Map<string, string> = new Map<string, string>();

export const getCommandByName = (name: string): string => {
  name = name.trim().toLowerCase().split(" ")[0];

  return commands.get(name) || `${name}: command not found`;
};
