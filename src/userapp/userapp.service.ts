@Injectable()

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { UserappEntity } from './userapp.entity';
import { UserappRO } from './userapp.interface';
import { CreateUserappDto } from './dto';

@Injectable()
export class UserappService {
  constructor(
    @InjectRepository(UserappEntity)
    private readonly userappRepository: Repository<UserappEntity>,
  ) {}

  async findAll(): Promise<UserappEntity[]> {
    return await this.userappRepository.find();
  }

  async findOne({id}: CreateUserappDto): Promise<UserappEntity> {
    const userapp = await this.userappRepository.findOne({id});
    if (!userapp) {
      return null;
    }
    return null;
  }

  async create(dto: CreateUserappDto): Promise<UserappRO> {

    // check uniqueness of username/email
    const {name, costcenter, description} = dto;

    // create new userapp
    let newUserapp = new UserappEntity();
    newUserapp.name = name;
    newUserapp.costcenter = costcenter;
    newUserapp.description = description;

    const errors = await validate(newUserapp);
    if (errors.length > 0) {
      const _errors = {userapp: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedUserapp = await this.userappRepository.save(newUserapp);
      return this.buildUserappRO(savedUserapp);
    }
  }

  async update(id: number, dto: CreateUserappDto): Promise<UserappEntity> {
    let toUpdate = await this.userappRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.userappRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userappRepository.delete({ id: id});
  }

  async findById(id: number): Promise<UserappRO>{
    const userapp = await this.userappRepository.findOne(id);

    if (!userapp) {
      const errors = {Userapp: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildUserappRO(userapp);
  }


  private buildUserappRO(userapp: UserappEntity) {
    const UserappRO = {
      id: userapp.id,
      name: userapp.name,
      costcenter: userapp.costcenter,
      description: userapp.description
     
    };

    return {userapp: UserappRO};
  }
}

