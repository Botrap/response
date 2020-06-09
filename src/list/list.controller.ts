import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { ListService } from './list.service';
import { ListRO } from './list.interface';
import { ListEntryRO } from './list.interface';
import { CreateListDto } from './dto';
import { ListEntity } from './list.entity';
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
@ApiTags('lists')
@Controller('lists')

export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  async findAll(): Promise<ListEntity[]> {
    return await this.listService.findAll();
  }

  @Get('list')
  async findMList(@Param('id') id: number): Promise<ListRO> {
    return await this.listService.findById(id);
  }

  @Put('list')
  async update(@Param('id') id: number, @Body('list') listData: CreateListDto) {
    return await this.listService.update(id, listData);
  }

  //@UsePipes(new ValidationPipe())
  @Post('list')
  async create(@Body('list') listData: CreateListDto) {
    return this.listService.create(listData);
  }

  @Delete('list/:slug')
  async delete(@Param() params) {
    return await this.listService.delete(params.slug);
  }

  @Get(':slug/listentries')
  async findListEntries(@Param('slug') slug): Promise<ListEntryRO> {
    return await this.listService.findListEntry(slug);
  }

 
}

