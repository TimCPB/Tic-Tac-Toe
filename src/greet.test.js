import greet from '.greet'
import { TestScheduler } from 'jest'

test("takes name and returns 'hello ${name}'", () => {
  expect(greet(Tim)).toBe("Hello Tim")
})