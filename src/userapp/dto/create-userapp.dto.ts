import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateUserAppDto {

  readonly id: number;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly abbreviation: string;

  @IsNotEmpty()
  readonly description: string;

}
