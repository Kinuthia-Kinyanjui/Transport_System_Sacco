import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  route?: RouteWhereUniqueInput;
  transactionDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  vehicle?: VehicleWhereUniqueInput;
};
