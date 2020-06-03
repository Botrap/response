import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;

}

//costcenter: number;
// must > 0
