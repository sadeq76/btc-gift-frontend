import useFetchData from "@/api";

const path = "user/logout/";

export const useGetLogout = () => useFetchData(path, "POST");
