import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class CreateUserDto {

  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}