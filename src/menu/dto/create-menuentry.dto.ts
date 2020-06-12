import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateMenuEntryDto {

  @ApiProperty({type: Number, description: 'id'})
  readonly id: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'apappid'})
  appid: string;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'caption'})
  readonly caption: string;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'sortid'})
  readonly sortid: string;

}

