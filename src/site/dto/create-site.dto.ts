import { IsNotEmpty } from 'class-validator';

export class CreateSiteDto {

  readonly id: number;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  costcenter: number;

  @IsNotEmpty()
  readonly description: string;

}

//costcenter: number;
// must > 0
