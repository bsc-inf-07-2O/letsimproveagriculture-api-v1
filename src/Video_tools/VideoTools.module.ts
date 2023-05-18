import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VideoToolsservice } from "./VideoTools.service";
import { VideoToolsController } from "./VideoTools.controllers";
import { tutorialsEntity } from "./VideoTools";

@Module({
  imports: [TypeOrmModule.forFeature([tutorialsEntity])],
  controllers: [VideoToolsController],
  providers: [VideoToolsservice],
})


@Module({
  imports: [TypeOrmModule.forFeature([tutorialsEntity])],
  controllers: [VideoToolsController],
  providers: [VideoToolsservice],
})
export class VideoToolsModel {}
