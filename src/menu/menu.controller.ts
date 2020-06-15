import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { MenuService } from './menu.service';
import { MenuRO } from './menu.interface';
import { MenuEntryRO } from './menu.interface';
import { CreateMenuDto } from './dto';
import { MenuAppEntity } from './menuapp.entity';
import { MenuEntryEntity } from './menuentry.entity';
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
@ApiTags('menus')
@Controller('menus')

export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: 'Get all menus' })
  @ApiResponse({ status: 200, description: 'Returned all menus successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })  
  @Get()
  async findAll(): Promise<MenuAppEntity[]> {
    return await this.menuService.findAll();
  }

  @ApiOperation({ summary: 'Get single menu' })
  @ApiResponse({ status: 200, description: 'Returned menu successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('menu')
  async findMMenu(@Param('id') id: number): Promise<MenuRO> {
    return await this.menuService.findById(id);
  }

  @ApiOperation({ summary: 'Create menu' })
  @ApiResponse({ status: 200, description: 'Created menu successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateMenuDto})
  //@UsePipes(new ValidationPipe())
  @Post('menu')
  async create(@Body('menu') menuData: CreateMenuDto) {
    return this.menuService.create(menuData);
  }

  @ApiOperation({ summary: 'Update menu' })
  @ApiResponse({ status: 200, description: 'Updated menu successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateMenuDto})
  @Put('menu')
  async update(@Param('id') id: number, @Body('menu') menuData: CreateMenuDto) {
    return await this.menuService.update(id, menuData);
  }

  @ApiOperation({ summary: 'Delete menu' })
  @ApiResponse({ status: 200, description: 'Deleted menu successfully.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({type: CreateMenuDto})
  @Delete('menu/:slug')
  async delete(@Param() params) {
    return await this.menuService.delete(params.slug);
  }

  // @Get(':slug/menuentries')
  // async findMenuEntries(@Param('slug') slug): Promise<MenuEntryRO> {
  //   return await this.menuService.findMenuEntry(slug);
  // }

 
}

