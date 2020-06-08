import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';

import { Request } from 'express';
import { ListService } from './list.service';
import { ListRO } from './list.interface';
import { CreateListDto } from './dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

//import { User } from './user.decorator';
import { ValidationPipe } from '../shared/pipes/validation.pipe';

import {
  ApiBearerAuth, ApiTags
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@Controller()
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('list')
  async findMList(@Param('id') id: number): Promise<ListRO> {
    return await this.listService.findById(id);
  }

  @Put('list')
  async update(@Param('id') id: number, @Body('user') listData: CreateListDto) {
    return await this.listService.update(id, listData);
  }

  @UsePipes(new ValidationPipe())
  @Post('list')
  async create(@Body('user') userData: CreateListDto) {
    return this.listService.create(userData);
  }

  @Delete('list/:slug')
  async delete(@Param() params) {
    return await this.listService.delete(params.slug);
  }

 
}
