import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateListEntryDto {
  
  @ApiProperty({type: Number, description: 'id'})
  readonly id: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'name'})
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'description'})
  readonly desription: string;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'value'})
  readonly value: string;

}

