import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  balance?: SortOrder;
  bank?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mPesaNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
