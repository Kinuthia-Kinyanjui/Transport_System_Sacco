import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OfferCreateInput = {
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
