import useSWR from "swr";
import fetcher from "../services/utils/fetcher";

export default function useBlogs() {
    const { data, error } = useSWR(`/blogs`, fetcher);
    return {
        blogs: data,
        isLoading: !error && !data,
        isError: error,
    };
}
