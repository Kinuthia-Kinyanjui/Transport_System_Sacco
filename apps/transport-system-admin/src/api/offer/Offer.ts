import { User } from "../user/User";

export type Offer = {
  createdAt: Date;
  description: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
