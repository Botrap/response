import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuService } from './menu.service';
import { MenuEntity } from './menu.entity';
import { MenuController } from './menu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  providers: [MenuService],
  controllers: [
    MenuController
  ],
  exports: []
})
export class MenuModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}