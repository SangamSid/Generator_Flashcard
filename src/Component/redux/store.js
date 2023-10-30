import { flashCardData } from "./reducer";
import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer=combineReducers({flashCardData,})
export const store=createStore(rootReducer)