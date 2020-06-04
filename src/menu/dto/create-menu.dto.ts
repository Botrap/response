import { IsNotEmpty } from 'class-validator';

export class CreateMenuDto {

  readonly id: number;

  @IsNotEmpty()
  readonly appid: number;

  @IsNotEmpty()
  readonly caption: string;

  @IsNotEmpty()
  readonly sortid: string;

}

