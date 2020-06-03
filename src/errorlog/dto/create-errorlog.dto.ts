import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateErrorLogDto {

  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  readonly errorcode: number;

  readonly errorcodehtml: number;

  siteid: number;

}