export const persianToEnglish = (input: any): string =>
  input.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

export const convertToRls = (input: number) =>
  new Intl.NumberFormat("fa-IR").format(input);

export const counterSimplification = function (counter: number = 0) {
  const lookup = [
    { divider: 1e9, suffix: " میلیارد " },
    { divider: 1e6, suffix: " میلیون " },
    { divider: 1e3, suffix: " هزار " },
  ];

  for (const item of lookup) {
    if (counter > item.divider) {
      return (counter / item.divider).toFixed(0) + item.suffix;
    }
  }
  return counter;
};
