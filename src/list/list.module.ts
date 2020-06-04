import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListService } from './list.service';
import { ListEntity } from './list.entity';
import { ListController } from './list.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ListEntity])],
  providers: [ListService],
  controllers: [
    ListController
  ],
  exports: []
})
export class ListModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
