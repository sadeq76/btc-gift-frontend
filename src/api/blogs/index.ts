import useFetchData from "@/api";

const path = "blog/";

export const useGetBlogs = ({
  limit,
  offset,
}: {
  limit?: string;
  offset?: string;
}) =>
  useFetchData(path, "GET", {
    queryParams: {
      ...(limit ? { limit } : {}),
      ...(offset ? { offset } : {}),
    },
  });
