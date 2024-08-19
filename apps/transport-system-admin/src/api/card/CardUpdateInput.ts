import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardUpdateInput = {
  balance?: number | null;
  bank?: string | null;
  mPesaNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
