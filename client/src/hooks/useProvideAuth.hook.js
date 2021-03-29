import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../services/utils/fetcher";

export default function useProvideAuth() {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const isLogin = !!token;

    const { data, error } = useSWR(token ? `/users/me` : null, fetcher);

    const login = (data) => {
        setToken(data);
        localStorage.setItem("accessToken", JSON.stringify(data));
    };

    const logout = () => {
        setToken(null);
        setUser({});
        localStorage.removeItem("accessToken");
    };

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data, error]);

    return { user, login, isLogin, logout };
}
