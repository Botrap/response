import { Module } from '@nestjs/common';
import { SqldirectController } from './sqldirect.controller';
import { SqldirectService } from './sqldirect.service';

@Module({
  controllers: [SqldirectController],
  providers: [SqldirectService]
})
export class SqldirectModule {}
