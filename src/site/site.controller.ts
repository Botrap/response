
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
  @ApiResponse({ status: 200, description: 'Returned all sites successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async findAll(): Promise<SiteEntity[]> {
    return await this.siteService.findAll();
  }

  @ApiOperation({ summary: 'Get site' })
  @ApiResponse({ status: 200, description: 'Returned site successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('site')
  async findMList(@Param('id') id: number): Promise<SiteRO> {
    return await this.siteService.findById(id);
  }

  @ApiOperation({ summary: 'Create single site' })
  @ApiResponse({ status: 200, description: 'Created site successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateSiteDto})
  //@UsePipes(new ValidationPipe())
  @Post('site')
  async create(@Body('site') siteData: CreateSiteDto) {
    return this.siteService.create(siteData);
  }

  @ApiOperation({ summary: 'Update site' })
  @ApiResponse({ status: 200, description: 'Updated site successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateSiteDto})
  @Put('site')
  async update(@Param('id') id: number, @Body('site') siteData: CreateSiteDto) {
    return await this.siteService.update(id, siteData);
  }

  @ApiOperation({ summary: 'Delete site' })
  @ApiResponse({ status: 200, description: 'Deleted site successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateSiteDto})
  @Delete('site/:slug')
  async delete(@Param() params) {
    return await this.siteService.delete(params.slug);
  }

 
}
