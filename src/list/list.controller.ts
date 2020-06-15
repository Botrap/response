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
  @ApiResponse({ status: 200, description: 'Returned all lists successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async findAll(): Promise<ListEntity[]> {
    return await this.listService.findAll();
  }

  @ApiOperation({ summary: 'Get single list' })
  @ApiResponse({ status: 200, description: 'Returned list successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('list')
  async findMList(@Param('id') id: number): Promise<ListRO> {
    return await this.listService.findById(id);
  }

  @ApiOperation({ summary: 'Create list' })
  @ApiResponse({ status: 200, description: 'Created list successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateListDto})
  //@UsePipes(new ValidationPipe())
  @Post('list')
  async create(@Body('list') listData: CreateListDto) {
    return this.listService.create(listData);
  }

  @ApiOperation({ summary: 'Update list' })
  @ApiResponse({ status: 200, description: 'Updated list successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateListDto})
  @Put('list')
  async update(@Param('id') id: number, @Body('list') listData: CreateListDto) {
    return await this.listService.update(id, listData);
  }

  @ApiOperation({ summary: 'Delete list' })
  @ApiResponse({ status: 200, description: 'Deleted list successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateListDto})
  @Delete('list/:slug')
  async delete(@Param() params) {
    return await this.listService.delete(params.slug);
  }

  // @Get(':slug/listentries')
  // async findListEntries(@Param('slug') slug): Promise<ListEntryRO> {
  //   return await this.listService.findListEntry(slug);
  // }

 
}

