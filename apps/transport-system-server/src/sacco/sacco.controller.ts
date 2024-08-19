import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SaccoService } from "./sacco.service";
import { SaccoControllerBase } from "./base/sacco.controller.base";

@swagger.ApiTags("saccos")
@common.Controller("saccos")
export class SaccoController extends SaccoControllerBase {
  constructor(protected readonly service: SaccoService) {
    super(service);
  }
}
