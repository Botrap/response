import { IsNotEmpty } from 'class-validator';

export class CreateMenuEntryDto {

  @IsNotEmpty()
  readonly caption: string;


}