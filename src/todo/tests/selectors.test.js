import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
  it("Return only completed todos", () => {
    const fakeTodos = [
      { text: "test1", isCompleted: false },
      { text: "test2", isCompleted: false },
      { text: "test3", isCompleted: true },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal([{ text: "test3", isCompleted: true }]);
  });
});
