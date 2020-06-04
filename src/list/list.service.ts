import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { ListEntity } from './list.entity';
import { ListRO } from './list.interface';
import { CreateListDto } from './dto';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(ListEntity)
    private readonly listRepository: Repository<ListEntity>,
  ) {}

  async findAll(): Promise<ListEntity[]> {
    return await this.listRepository.find();
  }

  async findOne({id}: CreateListDto): Promise<ListEntity> {
    const list = await this.listRepository.findOne({id});
    if (!list) {
      return null;
    }
    return null;
  }

  async create(dto: CreateListDto): Promise<ListRO> {

    // check uniqueness of username/email
    const {name, costcenter, description} = dto;

    // create new list
    let newList = new ListEntity();
    newList.name = name;
    newList.costcenter = costcenter;
    newList.description = description;

    const errors = await validate(newList);
    if (errors.length > 0) {
      const _errors = {list: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedList = await this.listRepository.save(newList);
      return this.buildListRO(savedList);
    }
  }

  async update(id: number, dto: CreateListDto): Promise<ListEntity> {
    let toUpdate = await this.listRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.listRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.listRepository.delete({ id: id});
  }

  async findById(id: number): Promise<ListRO>{
    const list = await this.listRepository.findOne(id);

    if (!list) {
      const errors = {List: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildListRO(list);
  }


  private buildListRO(list: ListEntity) {
    const ListRO = {
      id: list.id,
      name: list.name,
      costcenter: list.costcenter,
      description: list.description
     
    };

    return {list: ListRO};
  }
}

