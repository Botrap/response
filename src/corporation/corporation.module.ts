import { Module } from '@nestjs/common';
import { CorporationService } from './corporation.service';

@Module({
  providers: [CorporationService]
})
export class CorporationModule {}
