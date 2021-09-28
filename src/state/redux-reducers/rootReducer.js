import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import spinnerReducer from './spinnerReducer';
import minmaxReducer from './minmaxReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    loading: spinnerReducer,
    minmax: minmaxReducer,
    products: productsReducer
});

export default rootReducer