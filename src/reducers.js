import { CHNAGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from "./constants";

const initialStateSearch = {
    searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {    
    switch (action.type) {
        case CHNAGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true }; 
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, isPending: false, robots: action.payload };
        case REQUEST_ROBOTS_FAILED:
            return { ...state, isPending: false, error: action.payload };
        default:
            return state;
    }
}