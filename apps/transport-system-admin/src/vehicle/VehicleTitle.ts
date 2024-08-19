import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "numberPlate";

export const VehicleTitle = (record: TVehicle): string => {
  return record.numberPlate?.toString() || String(record.id);
};
