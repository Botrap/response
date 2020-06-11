import { IsNotEmpty } from 'class-validator';

export class CreateMenuEntryDto {

  readonly id: number;

  @IsNotEmpty()
  appid: string;

  @IsNotEmpty()
  readonly caption: string;

  @IsNotEmpty()
  readonly sortid: string;


}


