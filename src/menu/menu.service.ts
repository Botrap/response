import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { MenuEntity } from './menu.entity';
import { MenuRO } from './menu.interface';
import { CreateMenuDto } from './dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
  ) {}

  async findAll(): Promise<MenuEntity[]> {
    return await this.menuRepository.find();
  }

  async findOne({id}: CreateMenuDto): Promise<MenuEntity> {
    const menu = await this.menuRepository.findOne({id});
    if (!menu) {
      return null;
    }
    return null;
  }

  async create(dto: CreateMenuDto): Promise<MenuRO> {

    // check uniqueness of username/email
    const {appid, caption, sortid} = dto;

    // create new menu
    let newMenu = new MenuEntity();
    newMenu.appid = appid;
    newMenu.caption = caption;
    newMenu.sortid = sortid;

    const errors = await validate(newMenu);
    if (errors.length > 0) {
      const _errors = {menu: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedMenu = await this.menuRepository.save(newMenu);
      return this.buildMenuRO(savedMenu);
    }
  }

  async update(id: number, dto: CreateMenuDto): Promise<MenuEntity> {
    let toUpdate = await this.menuRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.menuRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.menuRepository.delete({ id: id});
  }

  async findById(id: number): Promise<MenuRO>{
    const menu = await this.menuRepository.findOne(id);

    if (!menu) {
      const errors = {Menu: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildMenuRO(menu);
  }


  private buildMenuRO(menu: MenuEntity) {
    const MenuRO = {
      id: menu.id,
      appid: menu.appid,
      caption: menu.caption,
      sortid: menu.sortid
     
    };

    return {menu: MenuRO};
  }
}

