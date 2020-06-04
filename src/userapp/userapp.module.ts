import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserAppService } from './userapp.service';
import { UserAppEntity } from './userapp.entity';
import { UserAppController } from './userapp.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserAppEntity])],
  providers: [UserAppService],
  controllers: [
    UserAppController
  ],
  exports: []
})
export class UserAppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
