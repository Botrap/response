import { IsNotEmpty } from 'class-validator';

export class CreatListEntryDto {

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly desription: string;

  @IsNotEmpty()
  readonly value: string;

}