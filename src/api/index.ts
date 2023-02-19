import { apiBase } from "@/config/develop";
import { openSnackbar } from "@/composable/states/snackbar";
import { useAuth, useClearUserData } from "@/composable/states/auth";

//types
import ApiParams from "@/models/api.model";

const useApi = async function (
  path: string,
  method: "GET" | "POST" | "PUT",
  params?: ApiParams
) {
  return await $fetch(path, {
    baseURL: apiBase,
    method,
    query: { ...params?.queryParams },
    headers: {
      ...params?.headers,
      ...(useAuth().value
        ? { Authorization: localStorage.getItem("accessToken") }
        : {}),
    },
    body: params?.body,
    onResponse({ response }) {
      if (response.ok) {
        return response._data;
      } else {
        if (response.status === 401) {
          useClearUserData();
          useRouter().push("/");
          if (response._data?.data?.details) {
            openSnackbar(response._data.data.details, "warn");
          } else {
            openSnackbar("توکن شما منقضی شده است", "warn");
          }
        } else if (response.status >= 500) {
          openSnackbar("اخطار سرور: لطفا بعدا تلاش فرمایید", "error");
        } else if (response.status >= 400) {
          if (response._data?.data?.details) {
            openSnackbar(response._data.data.details, "error");
          } else {
            openSnackbar("اخطار کلاینت: لطفا دوباره سعی کنید", "error");
          }
        }
        throw new Error(`${response.status} : ${response.statusText}`);
      }
    },
  });
};

export default useApi;
