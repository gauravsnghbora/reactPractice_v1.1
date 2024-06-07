import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe("The getBorderStyleForDate styleComponent", () => {
  it("Return None if starting date is less that 7", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 3);
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.deep.equal("none");
  });

  it("Return style if starting date is less that 7", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 8);
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.deep.equal("2px solid red");
  });
});
