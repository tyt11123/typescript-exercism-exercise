export class GradeSchool {
  private _roster: {[grade: number]: string[]};

  constructor() {
    this._roster = {};
  }

  roster(): object {
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(name: string, grade: number): void {
    for (let grade in this._roster) {
      if (this._roster[grade].includes(name)) {
        this._roster[grade].splice(this._roster[grade].indexOf(name), 1);
        if (this._roster[grade].length === 0) delete this._roster[grade];
      }
    }
    this._roster[grade] ? this._roster[grade].push(name) : this._roster[grade] = [name];
    this._roster[grade].sort();
    return;
  }

  grade(grade: number): string[] {
    let nameList = this._roster[grade];
    return nameList ? [...nameList] : [];
  }
}
