import { Prompt } from "../types";

export function getColorfulPrompt(input: string) {
  input = input.replace(/ /g, "&nbsp;");
  const pieces = input.split("&nbsp;");
  if (pieces.length === 0) return input;

  if (pieces[0] === "sudo") {
    pieces[0] = `<span class="text-kali-green underline">${pieces[0]}</span>`;

    if (pieces[1]) {
      pieces[1] = `<span class="text-kali-green">${pieces[1]}</span>`;
    }
  } else {
    pieces[0] = `<span class="text-kali-green">${pieces[0]}</span>`;
  }

  return pieces.join("&nbsp;");
}

export function processPrompt(input: string): Prompt {
  const pieces = input.split(" ");
  let sudo = false;

  if (pieces[0] === "sudo") {
    pieces.shift();
    sudo = true;
  }

  return {
    command: pieces[0],
    args: pieces.slice(1),
    sudo,
  };
}
