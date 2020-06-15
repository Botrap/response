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
  ApiOperation, 
  ApiTags,
  ApiBody,
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

  @ApiOperation({ summary: 'Get all corporations' })
  @ApiResponse({ status: 200, description: 'Returned all corporations successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async findAll(): Promise<CorporationEntity[]> {
    return await this.corporationService.findAll();
  }


  // @ApiOperation({ summary: 'Get single corporation' })
  // @ApiResponse({ status: 200, description: 'Returned corporation successfully.'})
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  // @Get(':slug')
  // async findOne(@Param('slug') slug): Promise<CorporationRO> {
  //   return await this.corporationService.findOne({slug});
  // }

  @ApiOperation({ summary: 'Create corporation' })
  @ApiResponse({ status: 201, description: 'The corporation created successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateCorporationDto})
  @Post()
  async create(@Body('corporation') corporationData: CreateCorporationDto) {
    return this.corporationService.create(corporationData);
  }

  @ApiOperation({ summary: 'Update corporation' })
  @ApiResponse({ status: 201, description: 'The corporation updated successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateCorporationDto})
  @Put(':slug')
  async update(@Param() params, @Body('corporation') corporationData: CreateCorporationDto) {
    return this.corporationService.update(params.slug, corporationData);
  }

  @ApiOperation({ summary: 'Delete corporation' })
  @ApiResponse({ status: 201, description: 'The corporation delted successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateCorporationDto})
  @Delete(':slug')
  async delete(@Param() params) {
    return this.corporationService.delete(params.slug);
  }


}