import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { RoleService } from './role.service';
import { RoleRO } from './role.interface';
import { CreateRoleDto } from './dto';
import { RoleEntity } from './role.entity';
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
//Tags is Swagger header, Controller is path
@ApiTags('roles')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, description: 'Returned all roles successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('findall')
  async findAll(): Promise<RoleEntity[]> {
    return await this.roleService.findAll();
  }

  @ApiOperation({ summary: 'Get single role' })
  @ApiResponse({ status: 200, description: 'Returned role successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('find')
  async findMList(@Param('id') id: number): Promise<RoleRO> {
    return await this.roleService.findById(id);
  }

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200, description: 'Created role successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateRoleDto})
  //@UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body('role') roleData: CreateRoleDto) {
    return this.roleService.create(roleData);
  }

  @ApiOperation({ summary: 'Update role' })
  @ApiResponse({ status: 200, description: 'Updated role successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateRoleDto})
  @Put('update')
  async update(@Param('id') id: number, @Body('role') roleData: CreateRoleDto) {
    return await this.roleService.update(id, roleData);
  }

  @ApiOperation({ summary: 'Delete role' })
  @ApiResponse({ status: 200, description: 'Deleted role successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateRoleDto})
  @Delete('delete')
  async delete(@Param() params) {
    return await this.roleService.delete(params.slug);
  }
 
}
