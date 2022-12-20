import { fetchData } from "./fetch";
import { openSnackbar } from "./state";

export const useAuth = () => useState<boolean>("isLogin", () => getStatus());

export const logout = () => {
  fetchData({ url: "/logut" })
    .then(() => {
      useAuth().value = false;
      openSnackbar("از سیستم خارج شدید", "info");
    })
    .catch(() => openSnackbar("خطا لطفا دوباره امتحان کنید", "error"));
};

const getStatus = () => {
  if (process.client) {
    return !!localStorage.getItem("token");
  }
};
