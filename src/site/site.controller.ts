
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
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('sites')
@Controller('sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}


  @Get()
  async findAll(): Promise<SiteEntity[]> {
    return await this.siteService.findAll();
  }

  @Get('site')
  async findMList(@Param('id') id: number): Promise<SiteRO> {
    return await this.siteService.findById(id);
  }

  @Put('site')
  async update(@Param('id') id: number, @Body('site') siteData: CreateSiteDto) {
    return await this.siteService.update(id, siteData);
  }

  //@UsePipes(new ValidationPipe())
  @Post('site')
  async create(@Body('site') siteData: CreateSiteDto) {
    return this.siteService.create(siteData);
  }

  @Delete('site/:slug')
  async delete(@Param() params) {
    return await this.siteService.delete(params.slug);
  }

 
}
