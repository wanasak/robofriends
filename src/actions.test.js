import * as actions from "./actions";
import { CHNAGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING } from "./constants";

import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureStore([thunkMiddleware]);

it("should create an action to search robots", () => {
  const text = "abc";
  const expectedAction = {
    type: CHNAGE_SEARCH_FIELD,
    payload: text
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it("handle requesting robots API", () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
  };
  expect(action[0]).toEqual(expectedAction);
});
