import { combineReducers, createStore } from "redux";
import { useReducer } from "./reducer/userReducer";

const rootReducer = combineReducers({
    useReducer,
});

export const store = createStore (
    rootReducer,
    indow.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);