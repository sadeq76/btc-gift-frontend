import useFetchData from "@/api";

const path = "user/profile/";

export const useGetProfile = () => useFetchData(path, "GET");

export const usePostProfile = (body) =>
  useFetchData(path, "POST", {
    body,
  });
