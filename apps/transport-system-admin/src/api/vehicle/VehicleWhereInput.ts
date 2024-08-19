import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SaccoWhereUniqueInput } from "../sacco/SaccoWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  numberPlate?: StringNullableFilter;
  sacco?: SaccoWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
};
