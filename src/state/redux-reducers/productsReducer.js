import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";

const initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUCERS_CONSTANTS.PRODUCTS.GET_PRODUCTS:
            return {
                ...state,
                products: action.data
            }
            case REDUCERS_CONSTANTS.PRODUCTS.UPDATE_PRODUCTS:
            return {
                ...state,
                updatedProducts: action.data
            }
        default: 
        return state;
    }
}

export default productsReducer;