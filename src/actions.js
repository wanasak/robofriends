import { CHNAGE_SEARCH_FIELD } from "./constants";

export const setSearchField = text => ({
    type: CHNAGE_SEARCH_FIELD,
    payload: text
});
