export const convertToShamsi = function (input: string) {
  let options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(input).toLocaleDateString("fa-IR", options);
};

export const minuteSimplification = function (minutes: number) {
  let options: any = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(minutes).toLocaleDateString("fa-IR", options);
};
