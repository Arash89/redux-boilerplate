import {getUsersApi} from '../api-utils/api'

export const Types = {
    GET_USERS: "GET_USERS"
};

export const getUsers = (data) => {
    return {
        type: Types.GET_USERS,
        payload: getUsersApi()
    }
};
