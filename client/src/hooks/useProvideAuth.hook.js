import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../Services/utils/fetcher";

export default function useProvideAuth() {
    const [user, setUser] = useState({});
    const accessToken = localStorage.getItem("accessToken");

    const { data, error } = useSWR(
        accessToken ? `/v1/users/me` : null,
        fetcher
    );

    useEffect(() => {
        if (data) {
            setUser(data);
        }

        if (error) {
            localStorage.removeItem("accessToken");
        }
    }, [data, error]);

    return { user };
}
