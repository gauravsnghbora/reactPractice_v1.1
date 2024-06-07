import { expect } from "chai";
import { todos } from "../reducer";

describe("The todo reducer", () => {
  it("Create todo action is received", () => {
    const fakeTodo = { text: "Hello", isCompleted: false };
    const fakeAction = {
      type: "CREATE_TODO",
      payload: { todo: fakeTodo },
    };
    const originalState = { isLoading: true, data: [] };

    const expected = { isLoading: true, data: [fakeTodo] };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
