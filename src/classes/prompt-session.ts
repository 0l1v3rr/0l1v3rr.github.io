export default class PromptSession {
  public promptText: string;
  public showCursor: boolean;
  public enterPressed: boolean;

  public constructor() {
    this.promptText = "";
    this.showCursor = true;
    this.enterPressed = false;
  }

  public handleEnterClick(text: string): void {
    this.enterPressed = true;
    this.promptText = text;
    this.showCursor = false;
  }
}
