import axios from "axios";

const API_URL = "http://localhost:3000/v1/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "sign-in", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();