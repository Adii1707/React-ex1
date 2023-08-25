import { applyMiddleware, compose, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./Auth/reducer";
import { reducer as appreducer } from "./App/reducer";

const rootReducer = combineReducers({reducer, appreducer})
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))