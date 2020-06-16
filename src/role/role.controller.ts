import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { RoleService } from './role.service';
import { RoleRO } from './role.interface';
import { CreateRoleDto } from './dto';
import { RoleEntity } from './role.entity';
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
//Tags is Swagger header, Controller is path
@ApiTags('roles')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get('findall')
  async findAll(): Promise<RoleEntity[]> {
    return await this.roleService.findAll();
  }

  @ApiOperation({ summary: 'Get single role' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get(':id')
  async findMList(@Param('id') id: number): Promise<RoleRO> {
    return await this.roleService.findById(id);
  }

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateRoleDto})
  //@UsePipes(new ValidationPipe())
  @Post(':id')
  async create(@Body() roleData: CreateRoleDto) {
    return this.roleService.create(roleData);
  }

  @ApiOperation({ summary: 'Update role' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateRoleDto})
  @Put(':id')
  async update(@Param('id') id: number, @Body() errorlogData:  CreateRoleDto) {
    return await this.roleService.update(id, errorlogData);
  }



  @ApiOperation({ summary: 'Delete role' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateRoleDto})
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.roleService.delete(id);

  }



}
