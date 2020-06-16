import { IsNotEmpty, IsNumber, IsNumberOptions } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateErrorLogDto {

  @ApiProperty({type: Number, description: 'id'})
  readonly id: number;

  @IsNumber()
  @ApiProperty({type: Number, description: 'siteid'})
  readonly siteid: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'description'})
  readonly description: string;

  @IsNumber()
  @ApiProperty({type: String, description: 'errorcode'})
  readonly errorcode: string;

  @ApiProperty({type: String, description: 'errorcodehtml'})
  readonly errorcodehtml: string;





}

