import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "bank";

export const CardTitle = (record: TCard): string => {
  return record.bank?.toString() || String(record.id);
};
