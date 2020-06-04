import { IsNotEmpty } from 'class-validator';

export class CreateSiteDto {

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;

}

//costcenter: number;
// must > 0
