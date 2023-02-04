import { openSnackbar } from "@/composable/states/snackbar";
import { useAuth } from "@/composable/states/auth";

interface FetchParamsModel {
  url: string;
  method?: string;
  body?: any;
  headers?: any;
}

export const fetchData = async ({
  url,
  method,
  body,
  headers,
}: FetchParamsModel) =>
  await $fetch(url, {
    method,
    body,
    headers,
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
