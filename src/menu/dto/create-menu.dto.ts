import { IsNotEmpty } from 'class-validator';

export class CreateMenuDto {

  readonly id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  abbreviation: string;

}

