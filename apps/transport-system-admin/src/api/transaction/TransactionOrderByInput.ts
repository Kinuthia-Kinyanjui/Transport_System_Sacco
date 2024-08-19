import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  routeId?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  vehicleId?: SortOrder;
};
