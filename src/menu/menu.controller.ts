import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { MenuService } from './menu.service';
import { MenuRO } from './menu.interface';
import { MenuEntryRO } from './menu.interface';
import { CreateMenuDto } from './dto';
import { MenuEntity } from './menu.entity';
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
@ApiTags('menus')
@Controller('menus')

export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAll(): Promise<MenuEntity[]> {
    return await this.menuService.findAll();
  }

  @Get('menu')
  async findMMenu(@Param('id') id: number): Promise<MenuRO> {
    return await this.menuService.findById(id);
  }

  @Put('menu')
  async update(@Param('id') id: number, @Body('menu') menuData: CreateMenuDto) {
    return await this.menuService.update(id, menuData);
  }

  //@UsePipes(new ValidationPipe())
  @Post('menu')
  async create(@Body('menu') menuData: CreateMenuDto) {
    return this.menuService.create(menuData);
  }

  @Delete('menu/:slug')
  async delete(@Param() params) {
    return await this.menuService.delete(params.slug);
  }

  // @Get(':slug/menuentries')
  // async findMenuEntries(@Param('slug') slug): Promise<MenuEntryRO> {
  //   return await this.menuService.findMenuEntry(slug);
  // }

 
}

