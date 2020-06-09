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
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}


  @Get()
  async findAll(): Promise<RoleEntity[]> {
    return await this.roleService.findAll();
  }

  @Get('role')
  async findMList(@Param('id') id: number): Promise<RoleRO> {
    return await this.roleService.findById(id);
  }

  @Put('role')
  async update(@Param('id') id: number, @Body('role') roleData: CreateRoleDto) {
    return await this.roleService.update(id, roleData);
  }

  //@UsePipes(new ValidationPipe())
  @Post('role')
  async create(@Body('role') roleData: CreateRoleDto) {
    return this.roleService.create(roleData);
  }

  @Delete('role/:slug')
  async delete(@Param() params) {
    return await this.roleService.delete(params.slug);
  }

 
}
