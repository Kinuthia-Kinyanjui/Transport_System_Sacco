import { User } from "../user/User";

export type Card = {
  balance: number | null;
  bank: string | null;
  createdAt: Date;
  id: string;
  mPesaNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
