import { IsNotEmpty } from 'class-validator';

export class CreateMenuDto {

  readonly id: number;

  @IsNotEmpty()
  readonly appid: string;

  @IsNotEmpty()
  readonly caption: string;

  @IsNotEmpty()
  readonly sortid: string;

}

