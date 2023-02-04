export const useSnackbar = () => useState<boolean>("snackbar", () => false);
export const useSnackbarContent = () =>
  useState<any>("snackbarContent", () => {});
export const useModal = () => useState<boolean>("modal", () => false);

export const openSnackbar = (text, status) => {
  useSnackbar().value = false;
  useSnackbarContent().value = { text, status };
  setTimeout(() => (useSnackbar().value = true), 100);
};
