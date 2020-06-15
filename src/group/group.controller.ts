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
  @Get('group')
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
  @Post('group')
  @ApiBody({type: CreateGroupDto})
  async create(@Body('group') groupData: CreateGroupDto) {
    console.log('Group Data:');
    console.log(groupData);
     
    return this.groupService.create(groupData);
  }
  @ApiOperation({ summary: 'Change group' })
  @ApiResponse({ status: 200, description: 'Changed group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateGroupDto})
  //@ApiOperation()
  @Put('group')
  @ApiBody({type: CreateGroupDto})
  async update(@Param('id') id: number, @Body('group') groupData: CreateGroupDto) {
    return await this.groupService.update(id, groupData);
  }

  @ApiOperation({ summary: 'Delete group' })
  @ApiResponse({ status: 200, description: 'Deleted group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  //@ApiBody({type: CreateGroupDto})
  @Delete('delete')
  async delete(@Param('id') id: number) {
    this.groupService.delete(id);
  }

}
