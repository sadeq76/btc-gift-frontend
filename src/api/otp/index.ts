import useFetchData from "@/api";

const path = "user/otp/";

export const usePostNumber = (body) =>
  useFetchData(path, "POST", {
    body,
  });
