import axios from "axios";

export const getUsersApi = () => (axios.get("http://rem-rest-api.herokuapp.com/api/users?limit=3"));
