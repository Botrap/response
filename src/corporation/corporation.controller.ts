import {Get, Post, Body, Put, Delete, Query, Param, Controller} from '@nestjs/common';
import { Request } from 'express';
import { CorporationService } from './corporation.service';
import { CreateCorporationDto } from './dto';
import { CorporationRO } from './corporation.interface';
import { CorporationEntity } from './corporation.entity';
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
  constructor(private readonly corporationservice: CorporationService) {}

  @ApiOperation({ summary: 'Get all corporations' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get()
  async findAll(): Promise<CorporationEntity[]> {
    return await this.corporationservice.findAll();
  }

  @ApiOperation({ summary: 'Get single corporation' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get(':id')
   async findMList(@Param('id') id: number): Promise<CorporationRO> {
    return await this.corporationservice.findById(id);
  }

  @ApiOperation({ summary: 'Create corporation' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateCorporationDto})
  @Post(':id')
  async create(@Body('corporation') corporationData: CreateCorporationDto) {
    return this.corporationservice.create(corporationData);
  }

  @ApiOperation({ summary: 'Update errcorporationorlog' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateCorporationDto})
  @Put(':id')
  async update(@Param('id') id: number, @Body() errorlogData: CreateCorporationDto) {
    return await this.corporationservice.update(id, errorlogData);
  }

  @ApiOperation({ summary: 'Delete corporation' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  //@ApiBody({type: CreateCorporationDto})
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.corporationservice.delete(id);

  }

}

