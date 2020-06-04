import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';
import { RoleController } from './role.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [RoleService],
  controllers: [
    RoleController
  ],
  exports: []
})
export class RoleModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}

