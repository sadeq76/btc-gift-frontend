import useApi from "@/api";

const path = "user/profile/";

export const useGetProfile = () => useApi(path, "GET");

export const usePostProfile = (body) =>
  useApi(path, "PUT", {
    body,
  });
