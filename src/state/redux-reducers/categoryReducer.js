import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";

// const initialState = [];

const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case REDUCERS_CONSTANTS.CATEGORY.GET_CATEGORY:
            return {
                ...state,
                ...action.data,
            }

        default: 
        return state;
    }
}

export default categoryReducer;