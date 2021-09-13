export function encode(plainText: string): string | undefined {
  const regex = /[a-z|\d]/g;
  const trimmed = plainText.toLowerCase().match(regex);
  const plain = "abcdefghijklmnopqrstuvwxyz1234567890";
  const cipher = "zyxwvutsrqponmlkjihgfedcba1234567890";
  const cipherArray = trimmed?.map(x => plain.indexOf(x)).map(x => cipher[x]);
  return cipherArray?.reduce((x, y, i) => i % 5 === 0 ? `${x} ${y}` : `${x}${y}`).trim();
}

export function decode(cipherText: string): string {
  const trimmed = cipherText.split(" ").join("").split("");
  const plain = "abcdefghijklmnopqrstuvwxyz1234567890";
  const cipher = "zyxwvutsrqponmlkjihgfedcba1234567890";
  return trimmed.map(x => plain.indexOf(x)).map(x => cipher[x]).join("");
}
