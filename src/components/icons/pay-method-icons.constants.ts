export const PayMethodIconsList = [
  "credit",
  "debit",
  "cash",
  "transfer",
  "other",
] as const;

export type PayMethodIconName = (typeof PayMethodIconsList)[number];
