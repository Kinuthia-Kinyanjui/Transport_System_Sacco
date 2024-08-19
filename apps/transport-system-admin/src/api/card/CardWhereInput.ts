import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardWhereInput = {
  balance?: FloatNullableFilter;
  bank?: StringNullableFilter;
  id?: StringFilter;
  mPesaNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
