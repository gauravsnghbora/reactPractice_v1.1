import "node-fetch";
import fetchMock from "fetch-mock";
import { expect } from "chai";
import Sinon from "sinon";

import { loadTodos } from "../thunk";

describe("The load todos thunk", () => {
  it("Dispatch correct action in success scenario", async () => {
    const fakeDispatch = Sinon.spy();
    const fakeTodos = [
      { text: "test1", isCompleted: false },
      { text: "test2", isCompleted: true },
    ];
    fetchMock.get("http://localhost:8080/todos", fakeTodos);
    const expectedFirstAction = {
      type: "LOAD_TODOS_INPROGRESS",
    };
    const expectedSecondAction = {
      type: "LOAD_TODOS_SUCCESS",
      payload: { todos: fakeTodos },
    };

    await loadTodos()(fakeDispatch);

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);
    fetchMock.reset();
  });
});
