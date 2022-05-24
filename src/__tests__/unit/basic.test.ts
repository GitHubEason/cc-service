function sum(a: number, b: number) {
  return a + b;
}
describe("sum function", () => {
  it("should return the correct sum of two numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
