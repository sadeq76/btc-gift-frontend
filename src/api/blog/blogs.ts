import useFetchData from "@/api";

export const useGetBlogs = (limit?: string, offset?: string) =>
  useFetchData("blog/", "GET", {
    queryParams: {
      limit,
      offset,
    },
  });
