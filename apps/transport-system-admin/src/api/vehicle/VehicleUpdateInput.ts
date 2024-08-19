import { SaccoWhereUniqueInput } from "../sacco/SaccoWhereUniqueInput";
import { TransactionUpdateManyWithoutVehiclesInput } from "./TransactionUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  numberPlate?: string | null;
  sacco?: SaccoWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutVehiclesInput;
};
