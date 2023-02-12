import useFetchData from "@/api";

const path = "user/address/";

export const useGetAddress = () => useFetchData(path, "GET");

export const usePostAddress = (body) =>
  useFetchData(path, "POST", {
    body,
  });
