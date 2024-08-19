import { CardUpdateManyWithoutUsersInput } from "./CardUpdateManyWithoutUsersInput";
import { OfferUpdateManyWithoutUsersInput } from "./OfferUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  cards?: CardUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  monthlyExpenditure?: number | null;
  offers?: OfferUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  route?: RouteWhereUniqueInput | null;
  totalExpenditure?: number | null;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};
