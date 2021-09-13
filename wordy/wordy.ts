export const answer = (question: string): number => {
  if (question.startsWith("What is") === false) throw new Error("Unknown operation");
  if (question.endsWith("?") === false) throw new Error("Unknown operation");
  const stack = question.substring(question.indexOf("What is") + 7, question.indexOf("?"))
    .trim().split("by ").join("").split(" ");
  if (stack[0] === "") throw new Error("Syntax error");
  const number = /^-?\d*\.{0,1}\d+$/g;
  const nonNumber = /^[^-?\d*\.{0,1}\d+$]/g;
  while (stack.length > 1) {
    const operand1 = stack.shift();
    if (operand1 && operand1.search(nonNumber) > -1) throw new Error("Syntax error");
    const operator = stack.shift();
    if (operator && operator.search(number) > -1) throw new Error("Syntax error");
    const operand2 = stack.shift();
    if (operand2 && operand2.search(nonNumber) > -1) throw new Error("Syntax error");
    switch (operator) {
      case "plus": stack.unshift(String(Number(operand1) + Number(operand2))); break;
      case "minus": stack.unshift(String(Number(operand1) - Number(operand2))); break;
      case "multiplied": stack.unshift(String(Number(operand1) * Number(operand2))); break;
      case "divided": stack.unshift(String(Number(operand1) / Number(operand2))); break;
      default: throw new Error("Unknown operation");
    };
  };
  if (stack[0].search(nonNumber) > -1) throw new Error("Syntax error");
  return Number(stack[0]);
}
