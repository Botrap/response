import { IsNotEmpty } from 'class-validator';

export class CreateUserAppDto {

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly abbreviation: string;

}