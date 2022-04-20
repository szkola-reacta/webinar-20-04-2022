import { cut } from '../utils';

describe("Utils for blog", () => {
  test("cut should cut characters longer than 25", () => {
    // cut("Adam Małysz zgolił wąs") -> "Adam ...
    expect(cut("Adam Małysz zgolił wąs")).toBe("Adam ...");
  });
  test("cut should return full string", () => {
    expect(cut("Adam")).toBe("Adam");
  })
});