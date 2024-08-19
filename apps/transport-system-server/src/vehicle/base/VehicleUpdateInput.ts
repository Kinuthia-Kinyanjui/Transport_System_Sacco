/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { SaccoWhereUniqueInput } from "../../sacco/base/SaccoWhereUniqueInput";
import { Type } from "class-transformer";
import { TransactionUpdateManyWithoutVehiclesInput } from "./TransactionUpdateManyWithoutVehiclesInput";

@InputType()
class VehicleUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  numberPlate?: string | null;

  @ApiProperty({
    required: false,
    type: () => SaccoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaccoWhereUniqueInput)
  @IsOptional()
  @Field(() => SaccoWhereUniqueInput, {
    nullable: true,
  })
  sacco?: SaccoWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutVehiclesInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutVehiclesInput;
}

export { VehicleUpdateInput as VehicleUpdateInput };
