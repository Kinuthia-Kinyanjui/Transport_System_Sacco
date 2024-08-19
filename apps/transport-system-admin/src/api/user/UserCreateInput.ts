import { CardCreateNestedManyWithoutUsersInput } from "./CardCreateNestedManyWithoutUsersInput";
import { OfferCreateNestedManyWithoutUsersInput } from "./OfferCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  cards?: CardCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  monthlyExpenditure?: number | null;
  offers?: OfferCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  route?: RouteWhereUniqueInput | null;
  totalExpenditure?: number | null;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
