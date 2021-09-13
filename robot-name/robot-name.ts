export class Robot {
  _name: string;
  private static nameTotal: number = 26 * 26 * 1000;
  private static nameAsNumberList: number[] = Array.from({ length: Robot.nameTotal }, (_, i) => i);
  private static shuffle(array: number[]): number[] {
    var currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  private static shuffledNameAsNumberList: number[] = this.shuffle(this.nameAsNumberList);
  private static nameCount = 0;
  private static generate(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter1 = letters[Math.floor(this.shuffledNameAsNumberList[this.nameCount] / 1000 / 26)];
    const letter2 = letters[Math.floor(this.shuffledNameAsNumberList[this.nameCount] / 1000) % 26];
    const number = String(this.shuffledNameAsNumberList[this.nameCount] % 1000).padStart(3, "0");
    this.nameCount++;
    return `${letter1}${letter2}${number}`;
  };

  constructor() {
    this._name = Robot.generate();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.generate();
  }

  public static releaseNames(): void {
    this.shuffledNameAsNumberList = this.shuffle(this.nameAsNumberList);
    this.nameCount = 0;
    return;
  }
}