import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  route?: RouteWhereUniqueInput | null;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
