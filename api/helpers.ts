export class Shortener {
  abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  generatedLinks: string[] = [];

  randIndex() {
    return Math.floor(Math.random() * this.abc.length);
  }

  randString(length: number) {
    let newString = "";
    for (let i = 0; i < length; ++i) {
      newString += this.abc[this.randIndex()];
    }
    return newString;
  }

  getLink(length = 7): string {
    const result = this.randString(length);

    if (this.generatedLinks.includes(result)) {
      return this.getLink(length);
    } else {
      this.generatedLinks.push(result);
      return result;
    }
  }

  setLinks(existingLinks: string[]) {
    this.generatedLinks = existingLinks;
  }
}