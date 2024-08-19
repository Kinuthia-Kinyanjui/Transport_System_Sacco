/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Vehicle } from "./Vehicle";
import { VehicleCountArgs } from "./VehicleCountArgs";
import { VehicleFindManyArgs } from "./VehicleFindManyArgs";
import { VehicleFindUniqueArgs } from "./VehicleFindUniqueArgs";
import { CreateVehicleArgs } from "./CreateVehicleArgs";
import { UpdateVehicleArgs } from "./UpdateVehicleArgs";
import { DeleteVehicleArgs } from "./DeleteVehicleArgs";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { Sacco } from "../../sacco/base/Sacco";
import { VehicleService } from "../vehicle.service";
@graphql.Resolver(() => Vehicle)
export class VehicleResolverBase {
  constructor(protected readonly service: VehicleService) {}

  async _vehiclesMeta(
    @graphql.Args() args: VehicleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Vehicle])
  async vehicles(
    @graphql.Args() args: VehicleFindManyArgs
  ): Promise<Vehicle[]> {
    return this.service.vehicles(args);
  }

  @graphql.Query(() => Vehicle, { nullable: true })
  async vehicle(
    @graphql.Args() args: VehicleFindUniqueArgs
  ): Promise<Vehicle | null> {
    const result = await this.service.vehicle(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Vehicle)
  async createVehicle(
    @graphql.Args() args: CreateVehicleArgs
  ): Promise<Vehicle> {
    return await this.service.createVehicle({
      ...args,
      data: {
        ...args.data,

        sacco: args.data.sacco
          ? {
              connect: args.data.sacco,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Vehicle)
  async updateVehicle(
    @graphql.Args() args: UpdateVehicleArgs
  ): Promise<Vehicle | null> {
    try {
      return await this.service.updateVehicle({
        ...args,
        data: {
          ...args.data,

          sacco: args.data.sacco
            ? {
                connect: args.data.sacco,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Vehicle)
  async deleteVehicle(
    @graphql.Args() args: DeleteVehicleArgs
  ): Promise<Vehicle | null> {
    try {
      return await this.service.deleteVehicle(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  async findTransactions(
    @graphql.Parent() parent: Vehicle,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Sacco, {
    nullable: true,
    name: "sacco",
  })
  async getSacco(@graphql.Parent() parent: Vehicle): Promise<Sacco | null> {
    const result = await this.service.getSacco(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
