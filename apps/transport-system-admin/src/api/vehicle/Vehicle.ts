import { Sacco } from "../sacco/Sacco";
import { Transaction } from "../transaction/Transaction";

export type Vehicle = {
  createdAt: Date;
  id: string;
  numberPlate: string | null;
  sacco?: Sacco | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
