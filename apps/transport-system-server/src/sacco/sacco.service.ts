import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaccoServiceBase } from "./base/sacco.service.base";

@Injectable()
export class SaccoService extends SaccoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
