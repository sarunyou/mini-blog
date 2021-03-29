import axios from "./utils/axiosConfig";

class UserService {
    create(body) {
        return axios.post("/blogs", body).then((response) => {
            return response.data;
        });
    }

    update(blogId, body) {
        return axios.patch(`/blogs/${blogId}`, body).then((response) => {
            return response.data;
        });
    }

    delete(blogId) {
        return axios.delete(`/blogs/${blogId}`).then((response) => {
            return response.data;
        });
    }

    list() {
        return axios.get(`/blogs`).then((response) => {
            return response.data;
        });
    }
}

export default new UserService();
