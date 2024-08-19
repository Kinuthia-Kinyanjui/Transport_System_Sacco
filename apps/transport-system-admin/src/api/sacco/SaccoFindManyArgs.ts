import { SaccoWhereInput } from "./SaccoWhereInput";
import { SaccoOrderByInput } from "./SaccoOrderByInput";

export type SaccoFindManyArgs = {
  where?: SaccoWhereInput;
  orderBy?: Array<SaccoOrderByInput>;
  skip?: number;
  take?: number;
};
