import { VehicleUpdateManyWithoutSaccosInput } from "./VehicleUpdateManyWithoutSaccosInput";

export type SaccoUpdateInput = {
  name?: string | null;
  vehicles?: VehicleUpdateManyWithoutSaccosInput;
};
