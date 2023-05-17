import { MyInterface } from "../src/interface.js"

describe('interface', () => {
  const i: MyInterface = {
    Name: 'This is MyInterface.',
    Age: 9,
  }
  
  it('should got Name: "This is MyInterface."', () => {
    expect(i.Name).toBe('This is MyInterface.')
  })
  it('should got Age: 9', () => {
    expect(i.Age).toBe(9)
  })
})
