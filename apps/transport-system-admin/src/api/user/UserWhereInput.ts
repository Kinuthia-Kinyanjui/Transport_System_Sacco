import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OfferListRelationFilter } from "../offer/OfferListRelationFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  cards?: CardListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  monthlyExpenditure?: FloatNullableFilter;
  offers?: OfferListRelationFilter;
  phoneNumber?: StringNullableFilter;
  route?: RouteWhereUniqueInput;
  totalExpenditure?: FloatNullableFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
