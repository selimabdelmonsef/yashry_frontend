import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";

const initialState = [];

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUCERS_CONSTANTS.CATEGORY.GET_CATEGORY:
            return {
                ...state,
                data: action.data
            }
        default: 
        return state;
    }
}

export default categoryReducer;