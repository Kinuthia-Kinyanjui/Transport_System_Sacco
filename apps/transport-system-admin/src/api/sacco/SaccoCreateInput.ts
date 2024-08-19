import { VehicleCreateNestedManyWithoutSaccosInput } from "./VehicleCreateNestedManyWithoutSaccosInput";

export type SaccoCreateInput = {
  name?: string | null;
  vehicles?: VehicleCreateNestedManyWithoutSaccosInput;
};
