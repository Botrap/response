import { IsNotEmpty } from 'class-validator';

export class CreateMenuEntryPointDto {

  @IsNotEmpty()
  readonly menuentrypoint: string;

  @IsNotEmpty()
  readonly sortid: string;

  @IsNotEmpty()
  readonly action: string;

}