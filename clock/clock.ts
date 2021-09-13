export class Clock {
  private count: number;
  constructor(hour: number, minute?: number) {
    this.count = minute ? hour * 60 + minute : hour * 60;
  }

  public toString(): string {
    if (Math.abs(this.count) === 0) return "00:00";
    const sign = Math.sign(this.count);
    const value = Math.abs(this.count);
    const hour = sign === 1 ? Math.floor(value / 60) % 24 : (24 - Math.ceil(value / 60) % 24) % 24;
    const minute = sign === 1 ? value % 60 : (60 - value % 60) % 60;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    this.count += minutes;
    return this;
  }

  public minus(minutes: number): Clock {
    this.count -= minutes;
    return this;
  }

  public equals(other: Clock): boolean {
    return Math.sign(this.count) === Math.sign(other.count) ?
      this.count % 1440 === other.count % 1440 :
      (Math.abs(this.count) + Math.abs(other.count)) % 1440 === 0;
  }
}
