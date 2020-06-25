import { combineReducers } from "redux";

import Category from "./Category";
import CheckLogin from "./CheckLogin";
import Balance from "./Balance";

const myReducer = combineReducers({
  Category: Category,
  CheckLogin: CheckLogin,
  Balance: Balance,
});

export default myReducer;
