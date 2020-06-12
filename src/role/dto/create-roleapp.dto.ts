import { IsNotEmpty, IsBoolean } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class CreateRoleAppDto {

  @ApiProperty({type: Number, description: 'id'})
  readonly id: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'name'})
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'abbreviation'})
  readonly abbreviation: string;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'description'})
  readonly description: string;

}

