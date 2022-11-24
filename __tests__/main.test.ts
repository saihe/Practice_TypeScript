import { MyClass } from "../src/main";

const myClass = new MyClass(1);

describe('MyClass', () => {
  describe('addNum', () => {
    test('+1', () => {
      const addNum = 1;
      expect(myClass.add(addNum)).toBe(myClass.num + addNum);
    })
  })
})
