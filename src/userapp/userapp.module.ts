import { Module } from '@nestjs/common';
import { UserAppService } from './userapp.service';

@Module({
  providers: [UserAppService]
})
export class UserAppModule {}
