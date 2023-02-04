import useFetchData from "@/api";

const path = "logout/";

export const useGetLogout = () => useFetchData(path, "GET");
