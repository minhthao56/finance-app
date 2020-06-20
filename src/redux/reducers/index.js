import { combineReducers } from "redux";

import Category from "./Category";

const myReducer = combineReducers({
  Category: Category,
});

export default myReducer;
