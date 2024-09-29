export type History = {
  id: string;
  prompt: string;
  response: string;
};

export type Prompt = {
  command: string;
  args: string[];
};
