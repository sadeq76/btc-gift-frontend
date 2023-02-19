import useApi from "@/api";

const path = "card/";

export const useGetPrice = () => useApi(`${path}costs/`, "GET");

export const usePostOrder = (body) =>
  useApi(path, "PUT", {
    body,
  });
