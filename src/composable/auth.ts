import { fetchData } from "./fetch";
import { openSnackbar } from "./state";

export const useAuth = () => useState<boolean>("isLogin", () => getStatus());

export const logout = () => {
  fetchData({ url: "/logout" })
    .then(() => {
      useAuth().value = false;
      openSnackbar("از سیستم خارج شدید", "info");
      useRouter().push("/");
    })
    .catch(() => openSnackbar("خطا لطفا دوباره امتحان کنید", "error"));
};

const getStatus = () => {
  if (process.client) {
    return !!localStorage.getItem("token");
  }
};
