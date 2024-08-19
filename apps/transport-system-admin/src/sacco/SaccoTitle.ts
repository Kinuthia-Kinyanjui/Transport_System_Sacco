import { Sacco as TSacco } from "../api/sacco/Sacco";

export const SACCO_TITLE_FIELD = "name";

export const SaccoTitle = (record: TSacco): string => {
  return record.name?.toString() || String(record.id);
};
