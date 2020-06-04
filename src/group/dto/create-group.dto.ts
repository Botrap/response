import { IsNotEmpty } from 'class-validator';

export class CreateGroupDto {

  readonly id: number;

  @IsNotEmpty()
  readonly name: string;


}

