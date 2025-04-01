export const AccountIconsList = [
  "Pesos",
  "Dolar",
  "Euro",
  "bank",
  "cash",
  "electronic",
  "debt",
  "other",
] as const;

export type AccountIconName = (typeof AccountIconsList)[number];
