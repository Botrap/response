import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { MenuAppEntity } from './menuapp.entity';

import { MenuRO } from './menu.interface';
import { CreateMenuDto } from './dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuAppEntity)
    private readonly menuRepository: Repository<MenuAppEntity>,
  ) {}

  async findAll(): Promise<MenuAppEntity[]> {
    return await this.menuRepository.find();
  }

  async findOne({id}: CreateMenuDto): Promise<MenuAppEntity> {
    const menu = await this.menuRepository.findOne({id});
    if (!menu) {
      return null;
    }
    return null;
  }

  async create(dto: CreateMenuDto): Promise<MenuRO> {

    // check uniqueness of username/email
    const {name, description, abbreviation} = dto;

    // create new menu
    let newMenu = new MenuAppEntity();
    newMenu.name = name;
    newMenu.description = description;
    newMenu.abbreviation = abbreviation;

    const errors = await validate(newMenu);
    if (errors.length > 0) {
      const _errors = {menu: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedMenu = await this.menuRepository.save(newMenu);
      return this.buildMenuRO(savedMenu);
    }
  }

  async update(id: number, dto: CreateMenuDto): Promise<MenuAppEntity> {
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


  private buildMenuRO(menu: MenuAppEntity) {
    const MenuRO = {
      id: menu.id,
      appid: menu.name,
      caption: menu.description,
      sortid: menu.abbreviation
     
    };

    return {menu: MenuRO};
  }
}



