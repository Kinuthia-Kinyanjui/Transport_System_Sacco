import { Vehicle } from "../vehicle/Vehicle";

export type Sacco = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  vehicles?: Array<Vehicle>;
};
