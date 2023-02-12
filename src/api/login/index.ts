import useApi from "@/api";

const path = "user/login/";

export const usePostOtp = (body) =>
  useApi(path, "POST", {
    body,
  });
