import { SaccoWhereUniqueInput } from "../sacco/SaccoWhereUniqueInput";
import { TransactionCreateNestedManyWithoutVehiclesInput } from "./TransactionCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  numberPlate?: string | null;
  sacco?: SaccoWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutVehiclesInput;
};
