import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  monthlyExpenditure?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  roles?: SortOrder;
  routeId?: SortOrder;
  totalExpenditure?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
