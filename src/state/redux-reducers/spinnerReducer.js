import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";

const initialState = true;

const spinnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUCERS_CONSTANTS.LOADING:
            return {
                ...state,
                loading: action.data
            }
        default:
            return state;
    }
}

export default spinnerReducer;