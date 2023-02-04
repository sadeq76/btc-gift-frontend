import useFetchData from "@/api";

const path = "user/profile/";

export const usePostOtp = (body) =>
  useFetchData(path, "POST", {
    body,
  });
