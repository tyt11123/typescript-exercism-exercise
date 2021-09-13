export function commands(input: number): string[] {
  const binary = input.toString(2).padStart(5, "0").split("");
  let answer = [];
  if (binary[4] === "1") answer.push("wink");
  if (binary[3] === "1") answer.push("double blink");
  if (binary[2] === "1") answer.push("close your eyes");
  if (binary[1] === "1") answer.push("jump");
  if (binary[0] === "1") answer.reverse();
  return answer;
}
