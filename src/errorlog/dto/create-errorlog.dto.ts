import { IsNotEmpty, IsNumber, IsNumberOptions } from 'class-validator';

export class CreateErrorLogDto {

  @IsNumber()
  readonly siteid: number;

  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  readonly errorcode: number;

  readonly errorcodehtml: number;


}