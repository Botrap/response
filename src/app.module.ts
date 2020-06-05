import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { RoleModule } from './role/role.module';
import { CorporationModule } from './corporation/corporation.module';
import { CorporationController } from './corporation/corporation.controller';
import { SiteModule } from './site/site.module';
import { GroupModule } from './group/group.module';
import { UserAppModule } from './userapp/userapp.module';
import { UserAppController } from './userapp/userapp.controller';
import { MenuModule } from './menu/menu.module';
import { ListModule } from './list/list.module';
import { TagModule } from './tag/tag.module';
import { ProfileModule } from './profile/profile.module';
import { ErrorlogModule } from './errorlog/errorlog.module';

import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { configenv } from './config/config.env'
import { DatabaseConfig } from './config/database.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configenv],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
    CorporationModule,
    ErrorlogModule,
    GroupModule,
    ListModule,
    MenuModule,
    RoleModule,
    SiteModule,
    UserAppModule

  ],
  controllers: [
    AppController
  ],
  providers: [ConfigService]
})
export class AppModule {}
