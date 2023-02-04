import useFetchData from "@/api";

const path = "user/login/";

export const usePostOtp = (body) =>
  useFetchData(path, "POST", {
    body,
  });
