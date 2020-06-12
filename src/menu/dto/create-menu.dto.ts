import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateMenuDto {

  @ApiProperty({type: Number, description: 'id'})
  readonly id: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'name'})
  name: string;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'description'})
  description: string;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'abbreviation'})
  abbreviation: string;

}

