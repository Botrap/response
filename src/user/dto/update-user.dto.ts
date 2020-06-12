import {ApiProperty} from '@nestjs/swagger';

export class UpdateUserDto {

  @ApiProperty({type: String, description: 'username'})
  readonly username: string;
  
  @ApiProperty({type: String, description: 'email'})
  readonly email: string;
  
  @ApiProperty({type: String, description: 'bio'})
  readonly bio: string;
  
  @ApiProperty({type: String, description: 'image'})
  readonly image: string;
}




