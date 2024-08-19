import * as graphql from "@nestjs/graphql";
import { SaccoResolverBase } from "./base/sacco.resolver.base";
import { Sacco } from "./base/Sacco";
import { SaccoService } from "./sacco.service";

@graphql.Resolver(() => Sacco)
export class SaccoResolver extends SaccoResolverBase {
  constructor(protected readonly service: SaccoService) {
    super(service);
  }
}
