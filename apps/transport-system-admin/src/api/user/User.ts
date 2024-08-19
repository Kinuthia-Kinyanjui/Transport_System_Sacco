import { Card } from "../card/Card";
import { Offer } from "../offer/Offer";
import { JsonValue } from "type-fest";
import { Route } from "../route/Route";
import { Transaction } from "../transaction/Transaction";

export type User = {
  cards?: Array<Card>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  monthlyExpenditure: number | null;
  offers?: Array<Offer>;
  phoneNumber: string | null;
  roles: JsonValue;
  route?: Route | null;
  totalExpenditure: number | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
