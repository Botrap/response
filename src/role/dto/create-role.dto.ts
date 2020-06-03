import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {

  @IsNotEmpty()
  readonly caption: string;

  @IsNotEmpty()
  readonly sortid: string;

  @IsNotEmpty()
  readonly action: string;

}

// must > 0
//@Column()
//appid: number;

