export class Content {
  private content: string;

  get value() {
    return this.content;
  }

  private validateContentLength(content: string) {
    return content.length > 5 && content.length < 255;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content must be between 5 and 255 characters');
    }

    this.content = content;
  }
}
