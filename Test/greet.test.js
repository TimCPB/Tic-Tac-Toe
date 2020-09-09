import greet from '../src/Greet'

test("takes name and returns 'hello ${name}'", () => {
  expect(greet("Tim")).toBe("Hello Tim")
})