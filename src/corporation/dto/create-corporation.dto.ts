import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateCorporationDto {

  @ApiProperty({type: Number, description: 'id'})
  readonly id: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'name'})
  readonly name: string;

  @ApiProperty({type: Number, description: 'costcenter'})
  readonly costcenter: number;

  @ApiProperty({type: String, description: 'description'})
  readonly description: string;

}


