export const Types = {
    GET_USERS: "GET_USERS",
    GET_USERS_LISEN: "GET_USERS_LISEN"
};

export const getUsersRequest = () => ({
	type: Types.GET_USERS_LISEN
});

export const getUsers = (data) => {
    return {
        type: Types.GET_USERS,
        payload: data
    }
};
