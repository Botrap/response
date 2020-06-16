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
  ApiBody,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('lists')
@Controller('lists')

export class ListController {
  constructor(private readonly listService: ListService) {}

  @ApiOperation({ summary: 'Get all lists' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get()
  async findAll(): Promise<ListEntity[]> {
    return await this.listService.findAll();
  }

  @ApiOperation({ summary: 'Get single list' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get(':id')
  async findMList(@Param('id') id: number): Promise<ListRO> {
    return await this.listService.findById(id);
  }

  @ApiOperation({ summary: 'Create list' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateListDto})
  //@UsePipes(new ValidationPipe())
  @Post(':id')
  async create(@Body() listData: CreateListDto) {
    return this.listService.create(listData);
  }

  @ApiOperation({ summary: 'Update list' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateListDto})
  @Put(':id')
  async update(@Param('id') id: number, @Body() listData: CreateListDto) {
    return await this.listService.update(id, listData);
  }

  @ApiOperation({ summary: 'Delete list' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateListDto})
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.listService.delete(id);
  }

  // @Get(':slug/listentries')
  // async findListEntries(@Param('slug') slug): Promise<ListEntryRO> {
  //   return await this.listService.findListEntry(slug);
  // }

 
}

