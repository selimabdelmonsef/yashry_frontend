import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import spinnerReducer from './spinnerReducer';
import minmaxReducer from './filter-reducer/minmaxReducer';
import productsReducer from './productsReducer';
import colorReducer from "./filter-reducer/colorReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    loading: spinnerReducer,
    minmax: minmaxReducer,
    color: colorReducer,
    products: productsReducer
});

export default rootReducer