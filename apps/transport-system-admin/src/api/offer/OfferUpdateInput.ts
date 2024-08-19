import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OfferUpdateInput = {
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
