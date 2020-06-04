import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SiteService } from './site.service';
import { SiteEntity } from './site.entity';
import { SiteController } from './site.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SiteEntity])],
  providers: [SiteService],
  controllers: [
    SiteController
  ],
  exports: []
})
export class SiteModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
