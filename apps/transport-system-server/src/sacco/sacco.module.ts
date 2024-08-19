import { Module } from "@nestjs/common";
import { SaccoModuleBase } from "./base/sacco.module.base";
import { SaccoService } from "./sacco.service";
import { SaccoController } from "./sacco.controller";
import { SaccoResolver } from "./sacco.resolver";

@Module({
  imports: [SaccoModuleBase],
  controllers: [SaccoController],
  providers: [SaccoService, SaccoResolver],
  exports: [SaccoService],
})
export class SaccoModule {}
