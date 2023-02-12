import useFetchData from "@/api";

const path = "user/otp/";

export const usePostNumber = (body: any) =>
  useFetchData(path, "POST", {
    body,
  });
