import { IsNotEmpty, IsNumber, IsNumberOptions } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class CreateErrorLogDto {

  @IsNumber()
  @ApiProperty({type: Number, description: 'siteid'})
  readonly siteid: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'description'})
  readonly description: string;

  @IsNumber()
  @ApiProperty({type: Number, description: 'errorcode'})
  readonly errorcode: number;

  @ApiProperty({type: Number, description: 'errorcodehtml'})
  readonly errorcodehtml: number;


}

