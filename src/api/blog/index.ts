import useApi from "@/api";

const path = "blog/";

export const useGetBlog = (id) => useApi(path + `${id}/`, "GET");
