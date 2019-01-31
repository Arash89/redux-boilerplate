import axios from "axios";

export const Types = {
    GET_USERS: "GET_USERS"
};

export const getUsers = () => {
    console.log("I wana to be run :D");
    return {
        type: Types.GET_USERS,
        payload: axios.get("http://rem-rest-api.herokuapp.com/api/users")
    }
};
