import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import spinnerReducer from './spinnerReducer';

const rootReducer = combineReducers({
category: categoryReducer,
loading: spinnerReducer
});

export default rootReducer