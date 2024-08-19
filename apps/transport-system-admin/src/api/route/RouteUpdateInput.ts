import { UserUpdateManyWithoutRoutesInput } from "./UserUpdateManyWithoutRoutesInput";
import { TransactionUpdateManyWithoutRoutesInput } from "./TransactionUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  fare?: number | null;
  name?: string | null;
  saccos?: UserUpdateManyWithoutRoutesInput;
  transactions?: TransactionUpdateManyWithoutRoutesInput;
};
