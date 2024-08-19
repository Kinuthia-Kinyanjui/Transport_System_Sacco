import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type RouteWhereInput = {
  fare?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  saccos?: UserListRelationFilter;
  transactions?: TransactionListRelationFilter;
};
