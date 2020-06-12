import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class CreateSiteDto {

  @ApiProperty({type: Number, description: 'id'})
  readonly id: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'name'})
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty({type: Number, description: 'costcenter'})
  costcenter: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'description'})
  readonly description: string;

}

//costcenter: number;
// must > 0



