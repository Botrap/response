import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { UserAppService } from './userapp.service';
import { UserAppRO } from './userapp.interface';
import { CreateUserAppDto } from './dto';
import { UserAppEntity } from './userapp.entity';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

//import { User } from './user.decorator';
import { ValidationPipe } from '../shared/pipes/validation.pipe';


import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, 
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('userapps')
@Controller('userapps')
export class UserAppController {
  constructor(private readonly userappService: UserAppService) {}

  @Get()
  async findAll(): Promise<UserAppEntity[]> {
    return await this.userappService.findAll();
  }

  @Get('userapp')
  async findMList(@Param('id') id: number): Promise<UserAppRO> {
    return await this.userappService.findById(id);
  }

  @Put('userapp')
  async update(@Param('id') id: number, @Body('userapp') userappData: CreateUserAppDto) {
    return await this.userappService.update(id, userappData);
  }

  //@UsePipes(new ValidationPipe())
  @Post('userapp')
  async create(@Body('userapp') userappData: CreateUserAppDto) {
    return this.userappService.create(userappData);
  }

  @Delete('userapp/:slug')
  async delete(@Param() params) {
    return await this.userappService.delete(params.slug);
  }

}
