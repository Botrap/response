import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';


export class CreateGroupDto {

  @ApiProperty({type: Number, description: 'id'})
  readonly id: number;

  @IsNotEmpty()
  @ApiProperty({type: String, description: 'name'})
  readonly name: string;


}

