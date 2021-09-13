export function hey(message: unknown): unknown {
  if (typeof message === "string") {
    const questionMarkAtTheEnd =
      message.trim().length &&
      message.trimEnd().lastIndexOf("?") === message.trimEnd().length - 1;
    const meaningfulWords = /[\w]/g;
    const letter = /[A-Za-z]/g;
    const smallLetter = /[a-z]/g;
    const isMeaningful = message.search(meaningfulWords) > -1;
    const allCapitals = message.search(letter) > -1 && message.search(smallLetter) === -1;
    if (questionMarkAtTheEnd && allCapitals) return "Calm down, I know what I'm doing!";
    if (questionMarkAtTheEnd) return "Sure.";
    if (allCapitals) return "Whoa, chill out!";
    if (isMeaningful === false) return "Fine. Be that way!";
  }
  return "Whatever.";
}
