import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { GroupService } from './group.service';
import { GroupRO } from './group.interface';
import { CreateGroupDto } from './dto';
import { GroupEntity } from './group.entity';
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
@ApiTags('groups')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}


  @Get()
  async findAll(): Promise<GroupEntity[]> {
    return await this.groupService.findAll();
  }

  @Get('group')
  async findMList(@Param('id') id: number): Promise<GroupRO> {
    return await this.groupService.findById(id);
  }

  @Put('group')
  async update(@Param('id') id: number, @Body('group') groupData: CreateGroupDto) {
    return await this.groupService.update(id, groupData);
  }

  //@UsePipes(new ValidationPipe())
  @Post('group')
  async create(@Body('group') groupData: CreateGroupDto) {
    return this.groupService.create(groupData);
  }

  @Delete('group/:slug')
  async delete(@Param() params) {
    return await this.groupService.delete(params.slug);
  }

 
}
