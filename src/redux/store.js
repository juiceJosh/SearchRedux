import { createStore } from "redux";
// import logger from 'redux-logger';
import rootReducer from "./reducers";

// const middleWares=[logger]
export default createStore(rootReducer)