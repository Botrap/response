import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ErrorlogService } from './errorlog.service';
import { ErrorLogEntity } from './errorlog.entity';
import { ErrorlogController } from './errorlog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ErrorLogEntity])],
  providers: [ErrorlogService],
  controllers: [
    ErrorlogController
  ],
  exports: []
})
export class ErrorlogModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
