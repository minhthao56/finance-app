import { combineReducers } from "redux";

import Category from "./Category";
import CheckLogin from "./CheckLogin";

const myReducer = combineReducers({
  Category: Category,
  CheckLogin: CheckLogin,
});

export default myReducer;
