import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { examsPapersservice } from "./examsPapers.service";
import { Papers } from "./examsPapers";
import { examsPapersController } from "./examsPapers.controllers";


@Module({
  imports: [TypeOrmModule.forFeature([Papers])],
  controllers: [examsPapersController],
  providers: [examsPapersservice],
})
export class examsPapersModel {}
