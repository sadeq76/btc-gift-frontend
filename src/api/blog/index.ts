import useFetchData from "@/api";

const path = "blog/";

export const useGetBlog = (id) => useFetchData(path + `/${id}/`, "GET");
