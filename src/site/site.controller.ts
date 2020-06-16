
import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { SiteService } from './site.service';
import { SiteRO } from './site.interface';
import { CreateSiteDto } from './dto';
import { SiteEntity } from './site.entity';
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
@ApiTags('sites')
@Controller('sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @ApiOperation({ summary: 'Get all sites' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Not authorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @Get()
  async findAll(): Promise<SiteEntity[]> {
    return await this.siteService.findAll();
  }

  @ApiOperation({ summary: 'Get site' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Not authorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @Get(':id')
  async findMList(@Param('id') id: number): Promise<SiteRO> {
    return await this.siteService.findById(id);
  }

  @ApiOperation({ summary: 'Create single site' })
  @ApiResponse({ status: 201, description: 'Created group successfully.'})
  @ApiResponse({ status: 400, description: 'Wrong Format/Data.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Failure.' })
  @ApiBody({type: CreateSiteDto})
  //@UsePipes(new ValidationPipe())
  @Post(':id')
  async create(@Body() siteData: CreateSiteDto) {
    return this.siteService.create(siteData);
  }

  @ApiOperation({ summary: 'Update site' })
  @ApiResponse({ status: 200, description: 'Created errorlog successfully.',, response = Participant.class})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 500, description: 'Failure.' })
  @ApiBody({type: CreateSiteDto})
  @Put(':id')
  async update(@Param('id') id: number, @Body() errorlogData: CreateSiteDto) {
    return await this.siteService.update(id, errorlogData);
  }


  @ApiOperation({ summary: 'Delete site' })
  @ApiResponse({ status: 200, description: 'Deleted errorlog successfully.'})
  @ApiResponse({ status: 204, description: 'Deleted errorlog successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 500, description: 'Failure.' })
  @ApiBody({type: CreateSiteDto})
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.siteService.delete(id);
  }


}
