import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import { Request } from 'express';
import { ProfileService } from './profile.service';
import { ProfileRO } from './profile.interface';
import { User } from '../user/user.decorator';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, 
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('profiles')
@Controller('profiles')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) {}

  @ApiOperation({ summary: 'Get profile' })
  @ApiResponse({ status: 200, description: 'Returned profile successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get(':username')
  async getProfile(@User('id') userId: number, @Param('username') username: string): Promise<ProfileRO> {
    return await this.profileService.findProfile(userId, username);
  }

  @ApiOperation({ summary: 'Create profile' })
  @ApiResponse({ status: 200, description: 'Created profile successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post(':username/follow')
  async follow(@User('email') email: string, @Param('username') username: string): Promise<ProfileRO> {
    return await this.profileService.follow(email, username);
  }

// RWQ: updated missing!!


  @ApiOperation({ summary: 'Delete profile' })
  @ApiResponse({ status: 200, description: 'Deleted profile successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':username/follow')
  async unFollow(@User('id') userId: number,  @Param('username') username: string): Promise<ProfileRO> {
    return await this.profileService.unFollow(userId, username);
  }

}