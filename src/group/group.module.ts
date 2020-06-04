import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GroupService } from './group.service';
import { GroupEntity } from './group.entity';
import { GroupController } from './group.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  providers: [GroupService],
  controllers: [
    GroupController
  ],
  exports: []
})
export class GroupModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
