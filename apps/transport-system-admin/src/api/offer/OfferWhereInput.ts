import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OfferWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
