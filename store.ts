import { combineReducers, createStore } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    form: formReducer,
    routing: routerReducer
});

export const store = createStore(rootReducer);