import { IsNotEmpty } from 'class-validator';

export class CreateMenuEntryPointDto {

  readonly id: number;

  @IsNotEmpty()
  readonly groupid: number;

  @IsNotEmpty()
  readonly appid: number;

  @IsNotEmpty()
  readonly menuentrypoint: string;

  @IsNotEmpty()
  readonly sortid: string;

}


