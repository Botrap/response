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
@ApiTags('errorlogs')
@Controller('errorlog')
export class ErrorlogController {
  constructor(private readonly errorlogservice: ErrorlogService) {}

  @ApiOperation({ summary: 'Get all errorlogs' })
  @ApiResponse({ status: 200, description: 'Returned all errorlogs successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async findAll(): Promise<ErrorLogEntity[]> {
    return await this.errorlogservice.findAll();
  }

  @ApiOperation({ summary: 'Get single errorlog' })
  @ApiResponse({ status: 200, description: 'Returned errorlog successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('errorlog')
   async findMList(@Param('id') id: number): Promise<ErrorLogRO> {
    return await this.errorlogservice.findById(id);
  }

  @ApiOperation({ summary: 'Create errorlog' })
  @ApiResponse({ status: 200, description: 'Created errorlog successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateErrorLogDto})
  //@UsePipes(new ValidationPipe())
  @Post('errorlog')
  @ApiBody({type: CreateErrorLogDto})
  async create(@Body('errorlog') errorlogData: CreateErrorLogDto) {
    return this.errorlogservice.create(errorlogData);
  }

  @ApiOperation({ summary: 'Change errorlog' })
  @ApiResponse({ status: 200, description: 'Changed errorlog successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateErrorLogDto})
  @Put('errorlog')
  @ApiBody({type: CreateErrorLogDto})
  async update(@Param('id') id: number, @Body('errorlog') errorlogData: CreateErrorLogDto) {
    return await this.errorlogservice.update(id, errorlogData);
  }

  @ApiOperation({ summary: 'Delete errorlog' })
  @ApiResponse({ status: 200, description: 'Deleted errorlog successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateErrorLogDto})
  @Delete('errorlog/:slug')
  @ApiBody({type: CreateErrorLogDto})
  async delete(@Param() params) {
    return await this.errorlogservice.delete(params.slug);
  }

 
}
