import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { ErrorlogService } from './errorlog.service';
import { ErrorLogRO} from './errorlog.interface';
import { CreateErrorLogDto } from './dto';
import { ErrorLogEntity } from './errorlog.entity';
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
@ApiTags('errorlog')
@Controller('errorlog')
export class ErrorlogController {
  constructor(private readonly errorlogservice: ErrorlogService) {}

  @ApiOperation({ summary: 'Get all errorlogs' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get()
  async findAll(): Promise<ErrorLogEntity[]> {
    return await this.errorlogservice.findAll();
  }

  @ApiOperation({ summary: 'Get single errorlog' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Get(':id')
   async findMList(@Param('id') id: number): Promise<ErrorLogRO> {
    return await this.errorlogservice.findById(id);
  }

  @ApiOperation({ summary: 'Create errorlog' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateErrorLogDto})
  //@UsePipes(new ValidationPipe())
  @Post(':id')
  async create(@Body() errorlogData: CreateErrorLogDto) {
    return this.errorlogservice.create(errorlogData);
  }

  @ApiOperation({ summary: 'Update errorlog' })
  @ApiResponse({ status: 200, description: 'Created group successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiBody({type: CreateErrorLogDto})
  @Put(':id')
  async update(@Param('id') id: number, @Body() errorlogData: CreateErrorLogDto) {
    return await this.errorlogservice.update(id, errorlogData);
  }

  @ApiOperation({ summary: 'Delete errorlog' })
  @ApiResponse({ status: 200, description: 'Deleted errorlog successfully.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.errorlogservice.delete(id);
  }


}
