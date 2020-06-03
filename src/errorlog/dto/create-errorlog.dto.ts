import { IsNotEmpty } from 'class-validator';

export class CreateErrorLogDto {

  @IsNotEmpty()
  readonly desription: string;

  @IsNotEmpty()
  readonly abbreverrorcodeiation: string;

}