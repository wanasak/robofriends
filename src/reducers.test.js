import {
  CHNAGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";
import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialState = {
    searchField: ""
  };

  it("should return initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHNAGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initialState, {
        type: CHNAGE_SEARCH_FIELD,
        payload: "abc"
      })
    ).toEqual({
      searchField: "abc"
    });
  });
});

describe("requestRobots", () => {
  const initialState = {
    isPending: false,
    robots: [],
    error: ""
  };

  it("should return initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      ...initialState,
      isPending: true
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "John Snow",
            email: "john@gmail.com"
          }
        ]
      })
    ).toEqual({
      ...initialState,
      isPending: false,
      robots: [
        {
          id: "123",
          name: "John Snow",
          email: "john@gmail.com"
        }
      ]
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Error!!!"
      })
    ).toEqual({
      ...initialState,
      isPending: false,
      error: "Error!!!"
    });
  });
});
