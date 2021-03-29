import axios from "axios";

const version = "v1";
const instance = axios.create({
    baseURL:
        `${process.env.REACT_APP_BACKEND}/${version}` ||
        `http://localhost:3000/${version}`,
});

instance.interceptors.request.use(function (config) {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const token = `Bearer ${accessToken}`;
    config.headers.Authorization = token;
    return config;
});

export default instance;
