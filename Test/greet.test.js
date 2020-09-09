import greet from '../src/greet'

test("takes name and returns 'hello ${name}'", () => {
  expect(greet("Tim")).toBe("Hello Tim")
})