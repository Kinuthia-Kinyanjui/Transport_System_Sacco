import { Route } from "../route/Route";
import { User } from "../user/User";
import { Vehicle } from "../vehicle/Vehicle";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  route?: Route | null;
  transactionDate: Date | null;
  updatedAt: Date;
  user?: User | null;
  vehicle?: Vehicle | null;
};
