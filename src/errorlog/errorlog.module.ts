import { Module } from '@nestjs/common';
import { ErrorlogService } from './errorlog.service';

@Module({
  providers: [ErrorlogService]
})
export class ErrorlogModule {}
