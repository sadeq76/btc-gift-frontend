let [scheme, subDomain, domain, topLevelDomai]: string[] = [
  "https",
  "api",
  "btcgift",
  "shop",
];

[domain, topLevelDomai] = ["league23", "ir"];

export const apiBase = `${scheme}://${subDomain}.${domain}.${topLevelDomai}/`;
