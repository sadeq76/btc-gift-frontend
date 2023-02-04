export const getAssets = (path: string): string => {
  const glob = import.meta.glob("~/assets/images/*/*", {
    eager: true,
  });

  return glob[`/assets/${path}`]["default"];
};
