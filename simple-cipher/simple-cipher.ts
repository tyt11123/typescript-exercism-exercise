export class SimpleCipher {
  private static mapper = "abcdefghijklmnopqrstuvwxyz";
  key: string;

  constructor(key?: string) {
    this.key = key || Array.from({ length: 100 }).map(_ => SimpleCipher.mapper[Math.floor(Math.random() * 26)]).join("");
  }

  encode(plainText: string): string {
    const shiftValue = this.key.split("").map(x => SimpleCipher.mapper.indexOf(x));
    const shiftFunction = (x: string, i: number) =>
      SimpleCipher.mapper[(SimpleCipher.mapper.indexOf(x) + shiftValue[i % shiftValue.length]) % SimpleCipher.mapper.length];
    const cipherText = plainText.split("").map(shiftFunction).join("");
    return cipherText;
  }
  
  decode(cipherText: string): string {
    const shiftValue = this.key.split("").map(x => SimpleCipher.mapper.indexOf(x));
    const shiftFunction = (x: string, i: number) =>
      SimpleCipher.mapper[(SimpleCipher.mapper.indexOf(x) - shiftValue[i % shiftValue.length] + SimpleCipher.mapper.length) % SimpleCipher.mapper.length];
    const plainText = cipherText.split("").map(shiftFunction).join("");
    return plainText;
  }
}
