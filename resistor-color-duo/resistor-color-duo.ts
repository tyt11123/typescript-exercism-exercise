export function decodedValue(color: string[]): number {
  const requiredColor = color.slice(0, 2).map(x => x.toLowerCase());
  let answer = "";
  for (let i = 0; i < requiredColor.length; i++) {
    switch (requiredColor[i]) {
      case "black":
        answer += "0";
        break;
      case "brown":
        answer += "1";
        break;
      case "red":
        answer += "2";
        break;
      case "orange":
        answer += "3";
        break;
      case "yellow":
        answer += "4";
        break;
      case "green":
        answer += "5";
        break;
      case "blue":
        answer += "6";
        break;
      case "violet":
        answer += "7";
        break;
      case "grey":
        answer += "8";
        break;
      case "white":
        answer += "9";
        break;
    }
  };
  return Number(answer);
}
