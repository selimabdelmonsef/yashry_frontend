import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";

const initialState = [];

const minamaxReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUCERS_CONSTANTS.RANGE.MIN_RANGE:
            return {
                ...state,
                min: action.data
            }
            case REDUCERS_CONSTANTS.RANGE.MAX_RANGE:
            return {
                ...state,
                max: action.data
            }
        default: 
        return state;
    }
}

export default minamaxReducer;