import { useGetLogout } from "@/api/logout";
import { openSnackbar } from "./snackbar";

export const useAuth = () => useState<boolean>("isLogin", () => getStatus());

export const useLogout = () => {
  useGetLogout()
    .then(() => {
      useAuth().value = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("profile");
      openSnackbar("از سیستم خارج شدید", "info");
      useRouter().push("/");
    })
    .catch(() => openSnackbar("خطا لطفا دوباره امتحان کنید", "error"));
};

const getStatus = () => {
  if (process.client) {
    return !!localStorage.getItem("accessToken");
  }
};

export const useClearUserData = function () {
  localStorage.removeItem("profile");
  localStorage.removeItem("accessToken");
  useAuth().value = false;
  openSnackbar("اطلاعات کاربری شما پاک شد", "info");
};
