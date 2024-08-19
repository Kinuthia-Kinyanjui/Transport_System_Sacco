import { User } from "../user/User";
import { Transaction } from "../transaction/Transaction";

export type Route = {
  createdAt: Date;
  fare: number | null;
  id: string;
  name: string | null;
  saccos?: Array<User>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
