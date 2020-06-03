import { IsNotEmpty } from 'class-validator';

export class CreateCorporationDto {

  @IsNotEmpty()
  readonly name: string;



}