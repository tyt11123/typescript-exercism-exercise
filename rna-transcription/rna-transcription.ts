export function toRna(input: string): string {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "G":
        answer += "C";
        break;
      case "C":
        answer += "G";
        break;
      case "T":
        answer += "A";
        break;
      case "A":
        answer += "U";
        break;
      default:
        throw new Error('Invalid input DNA.');
    }
  };
  return answer;
}
