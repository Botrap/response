import { IsNotEmpty } from 'class-validator';

export class CreateListEntryDto {
  
  readonly id: number;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly desription: string;

  @IsNotEmpty()
  readonly value: string;

}