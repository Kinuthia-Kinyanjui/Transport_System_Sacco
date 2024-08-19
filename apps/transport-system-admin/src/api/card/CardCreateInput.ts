import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardCreateInput = {
  balance?: number | null;
  bank?: string | null;
  mPesaNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
