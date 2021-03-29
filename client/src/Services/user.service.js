import axios from "./utils/axiosConfig";

class UserService {
    login({  username, password  }) {
        return axios
            .post("/auth/sign-in", {
                username,
                password,
            })
            .then((response) => {
                return response.data;
            });
    }
}

export default new UserService();
