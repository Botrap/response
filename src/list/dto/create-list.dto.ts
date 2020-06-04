import { IsNotEmpty } from 'class-validator';

export class CreateListDto {

  readonly id: number;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;

}