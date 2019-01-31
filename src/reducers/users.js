import { Types } from "../actions";

export const initState = {};

export const users = (state = initState, action) => {
    switch (action.type) {
        case Types.GET_USERS:
            return {
                ...state,
                users:action.payload
            }
        default:
            return state;
    }
} 