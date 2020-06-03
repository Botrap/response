import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateUserAppDto {

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly abbreviation: string;

  @IsNotEmpty()
  readonly description: string;

  @IsBoolean()
  readonly active: string;

}
