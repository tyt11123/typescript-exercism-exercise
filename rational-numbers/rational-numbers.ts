export class Rational {
  nominator: number;
  denominator: number;
  private static gcd = (x: number, y: number): number => {
    if (!y) return y === 0 ? x : NaN;
    return Rational.gcd(y, x % y);
  }
  private static lcm = (x: number, y: number): number => {
    return x * y / Rational.gcd(x, y);
  }

  constructor(nominator: number, denominator: number) {
    this.nominator = nominator;
    this.denominator = denominator;
  }

  add(other: Rational): Rational {
    const lcm = Rational.lcm(this.denominator, other.denominator);
    const newNominatorOfThis = this.nominator * lcm / this.denominator;
    const newNominatorOfOther = other.nominator * lcm / other.denominator;
    const answer = new Rational(newNominatorOfThis + newNominatorOfOther, lcm).reduce();
    return answer.denominator < 0 ?
      new Rational(answer.nominator * -1, answer.denominator * -1) :
      answer;
  }
  
  sub(other: Rational): Rational {
    const lcm = Rational.lcm(this.denominator, other.denominator);
    const newNominatorOfThis = this.nominator * lcm / this.denominator;
    const newNominatorOfOther = other.nominator * lcm / other.denominator;
    const answer = new Rational(newNominatorOfThis - newNominatorOfOther, lcm).reduce();
    return answer.denominator < 0 ?
      new Rational(answer.nominator * -1, answer.denominator * -1) :
      answer;
  }

  mul(other: Rational): Rational {
    const newNominator = this.nominator * other.nominator;
    const newDenominator = this.denominator * other.denominator;
    const answer = new Rational(newNominator, newDenominator).reduce();
    return answer.denominator < 0 ?
      new Rational(answer.nominator * -1, answer.denominator * -1) :
      answer;
  }
  
  div(other: Rational): Rational {
    const newNominator = this.nominator * other.denominator;
    const newDenominator = this.denominator * other.nominator;
    const answer = new Rational(newNominator, newDenominator).reduce();
    return answer.denominator < 0 ?
      new Rational(answer.nominator * -1, answer.denominator * -1) :
      answer;
  }
  
  abs(): Rational {
    const newNominator = this.nominator < 0 ? this.nominator * -1 : this.nominator;
    const newDenominator = this.denominator < 0 ? this.denominator * -1 : this.denominator;
    return new Rational(newNominator, newDenominator);
  }

  exprational(index: number): Rational {
    if (index === 0) return new Rational(1, 1);
    let answer = new Rational(this.nominator, this.denominator);
    let other = new Rational(this.nominator, this.denominator);
    for (let i = 0; i < index - 1; i++) {
      answer = answer.mul(other);
    }
    return answer.denominator < 0 ?
      new Rational(answer.nominator * -1, answer.denominator * -1):
      answer;
  }

  expreal(input: number) {
    return Number(Math.pow(input, this.nominator / this.denominator).toPrecision(15));
  }

  reduce(): Rational {
    const gcd = Rational.gcd(this.nominator, this.denominator);
    return this.denominator < 0 ?
      new Rational(-1 * this.nominator / gcd, -1 * this.denominator / gcd) :
      new Rational(this.nominator / gcd, this.denominator / gcd);
  }
}
