import { REDUCERS_CONSTANTS } from "../../../constants/reducers.constants";

const initialState = [];

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUCERS_CONSTANTS.COLOR.GET_COLOR:
            return {
                ...state,
                color: action.data
            }
        default: 
        return state;
    }
}

export default colorReducer;