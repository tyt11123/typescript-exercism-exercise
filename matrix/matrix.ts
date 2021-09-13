export class Matrix {
  _rows: number[][];
  _columns: number[][];

  constructor(sentence: string) {
    this._rows = sentence.split('\n').map(x => x.split(' ').map(y => Number(y)));
    
    this._columns = [];
    for (let i = 0; i < this._rows[0].length; i++) {
      this._columns.push([]);
      for (let j = 0; j < this._rows.length; j++) {
        this._columns[i].push(0);
      };
    };
    
    this._rows.forEach((row, i) => {
      row.forEach((element, j) => {
        this._columns[j][i] = element;
      });
    });
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}
