import { UserCreateNestedManyWithoutRoutesInput } from "./UserCreateNestedManyWithoutRoutesInput";
import { TransactionCreateNestedManyWithoutRoutesInput } from "./TransactionCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  fare?: number | null;
  name?: string | null;
  saccos?: UserCreateNestedManyWithoutRoutesInput;
  transactions?: TransactionCreateNestedManyWithoutRoutesInput;
};
