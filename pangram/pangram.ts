export function isPangram(str: string): boolean {
  let map = "abcdefghijklmnopqrstuvwxyz";
  let answer = [];
  for (let i = 0; i < map.length; i++) {
    answer.push(false);
  };
  let case_lowered = str.toLowerCase();
  for (let i = 0; i < case_lowered.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (case_lowered[i] === map[j]) {
        answer[j] = true;
      };
    };
  };
  return answer.reduce((x, y) => x && y);
}
