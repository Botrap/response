import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { GroupService } from './group.service';
import { GroupRO } from './group.interface';
import { CreateGroupDto } from './dto';
import { GroupEntity } from './group.entity';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { ValidationPipe } from '../shared/pipes/validation.pipe';

//import { User } from './user.decorator';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, 
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('groups')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @ApiOperation({ summary: 'Get all groups' })
  @ApiResponse({ status: 200, description: 'Returned all groups successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get()
  async findAll(): Promise<GroupEntity[]> {
    return await this.groupService.findAll();
  }

  @ApiOperation({ summary: 'Get single group' })
  @ApiResponse({ status: 200, description: 'Returned group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get(':id')
   async findMList(@Param('id') id: number): Promise<GroupRO> {
    return await this.groupService.findById(id);
  }

  @ApiOperation({ summary: 'Create group' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateGroupDto})
  //@UsePipes(new ValidationPipe())
  @Post(':id')
  async create(@Body() errorlogData: CreateGroupDto) {
    return this.groupService.create(errorlogData);
  }

  @ApiOperation({ summary: 'Update group' })
  @ApiResponse({ status: 200, description: 'Changed group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateGroupDto})
  @Put(':id')
  async update(@Param('id') id: number, @Body() errorlogData: CreateGroupDto) {
    return await this.groupService.update(id, errorlogData);
  }

  @ApiOperation({ summary: 'Delete group' })
  @ApiResponse({ status: 200, description: 'Deleted group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.groupService.delete(id);
  }

}
