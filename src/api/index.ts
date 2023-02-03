import { apiBase } from "@/config/develop";
import { openSnackbar } from "@/composable/state";
import { useAuth } from "@/composable/auth";

//types
import ApiParams from "@/models/api.model";

const useFetchData = async function (
  path: string,
  method: "GET" | "POST" | "PUT",
  params: ApiParams
) {
  const url = new URL(apiBase + path);

  return await $fetch(url.href, {
    method,
    query: { ...params.queryParams },
    headers: { ...params.headers },
    body: params.body,
    onResponse({ response }) {
      if (response.ok) {
        return response._data;
      } else {
        if (response.status === 401) {
          useAuth().value = false;
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

export default useFetchData;
