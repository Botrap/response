import { IsNotEmpty } from 'class-validator';

export class CreateCorporationDto {

  readonly id: number;

  @IsNotEmpty()
  readonly name: string;

  readonly costcenter: number;
  readonly description: string;

}