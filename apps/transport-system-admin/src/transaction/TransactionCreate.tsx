import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { RouteTitle } from "../route/RouteTitle";
import { UserTitle } from "../user/UserTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="route.id" reference="Route" label="route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
