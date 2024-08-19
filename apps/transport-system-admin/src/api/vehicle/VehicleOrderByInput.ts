import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  numberPlate?: SortOrder;
  saccoId?: SortOrder;
  updatedAt?: SortOrder;
};
