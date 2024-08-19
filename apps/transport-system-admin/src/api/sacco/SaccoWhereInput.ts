import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type SaccoWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  vehicles?: VehicleListRelationFilter;
};
