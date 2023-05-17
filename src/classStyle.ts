export class MyClass {
  private _num: number

  public constructor(num: number) {
    this._num = num
  }

  public get num(): number {
    return this._num
  }

  public add(addNum: number): number {
    return this._num + addNum
  }
}
