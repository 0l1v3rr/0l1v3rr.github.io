export type History = {
  id: string;
  prompt: string;
  response: string;
  username: string;
};

export type Prompt = {
  command: string;
  args: string[];
  sudo: boolean;
};
