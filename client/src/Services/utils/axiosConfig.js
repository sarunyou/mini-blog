import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND,
});

const accessToken = localStorage.getItem("accessToken");

if (accessToken) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export default instance;
