import {Get, Post, Body, Put, Delete, Query, Param, Controller} from '@nestjs/common';
import { Request } from 'express';
import { CorporationService } from './corporation.service';
import { CreateCorporationDto } from './dto';
import { CorporationRO } from './corporation.interface';
import { CorporationEntity } from './corporation.entity';

//import { CommentsRO } from './corporation.interface';
import { User } from '../user/user.decorator';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('corporations')
@Controller('corporations')
export class CorporationController {

  constructor(private readonly corporationService: CorporationService) {}


 // @Get('corporation')
 // async findMe(@Corporation('email') email: string): Promise<CorporationRO> {
 //   return await this.corporationService.findOne({id; any});
 // }


//  @Get()
//  async findAll(): Promise<CorporationEntity[]> {
//    return await this.corporationService.findAll();
//  }

  // @Get(':slug')
  // async findOne(@Param('slug') slug): Promise<CorporationRO> {
  //   return await this.corporationService.findOne({slug});
  // }

  @ApiOperation({ summary: 'Create corporation' })
  @ApiResponse({ status: 201, description: 'The corporation has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(@Body('corporation') corporationData: CreateCorporationDto) {
    return this.corporationService.create(corporationData);
  }

  @ApiOperation({ summary: 'Update corporation' })
  @ApiResponse({ status: 201, description: 'The corporation has been successfully updated.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':slug')
  async update(@Param() params, @Body('corporation') corporationData: CreateCorporationDto) {
    return this.corporationService.update(params.slug, corporationData);
  }

  @ApiOperation({ summary: 'Delete corporation' })
  @ApiResponse({ status: 201, description: 'The corporation has been successfully deleted.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug')
  async delete(@Param() params) {
    return this.corporationService.delete(params.slug);
  }


}