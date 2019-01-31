import { Types } from "../actions";

export const initState = {};

export const users = (state = initState, action) => {
    switch (action.type) {
        case Types.GET_USERS:
            console.log("I am here ;)");
            return {
                ...state,
                users:action.payload
            }
        default:
            console.log("I'm not here :p");
            return state;
    }
} 