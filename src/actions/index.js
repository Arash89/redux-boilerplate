export const Types = {
    GET_USERS: "GET_USERS",
    GET_USERS_LISEN: "GET_USERS_LISEN"
};

export const getUsersRequest = () => ({
	type: Types.GET_USERS_LISEN
});

export const getUsers = (result) => {
    console.log("I wana to be run :D",  result && result.data ? result.data.data : "nist");
    return {
        type: Types.GET_USERS,
        payload: result && result.data ? result.data.data : undefined
    }
};
