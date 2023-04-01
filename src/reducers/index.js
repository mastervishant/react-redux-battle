import { combineReducers } from "redux";
import data from "./data";
import visibilityFilter from "./visibilityFilter";
import lang from "./lang";
import battle from "./battle";

export default combineReducers({
  data,
  visibilityFilter,
  lang,
  battle
});
