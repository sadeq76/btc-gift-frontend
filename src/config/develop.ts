const [scheme, subDomain, domain, topLevelDomai]: string[] = [
  "https",
  "api",
  "btcgift",
  "shop",
];

export const apiBase = `${scheme}://${subDomain}.${domain}.${topLevelDomai}/`;
