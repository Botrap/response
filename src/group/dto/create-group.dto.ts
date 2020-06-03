import { IsNotEmpty } from 'class-validator';

export class CreateGroupDto {

  @IsNotEmpty()
  readonly desription: string;

  @IsNotEmpty()
  readonly abbreverrorcodeiation: string;

}