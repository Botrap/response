import { IsNotEmpty } from 'class-validator';

export class CreateMenuEntryDto {

  readonly id: number;

  @IsNotEmpty()
  readonly caption: string;


}


