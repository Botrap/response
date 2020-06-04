import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { UserAppEntity } from './userapp.entity';
import { UserAppRO } from './userapp.interface';
import { CreateUserAppDto } from './dto';

@Injectable()
export class UserappService {
  constructor(
    @InjectRepository(UserAppEntity)
    private readonly userappRepository: Repository<UserAppEntity>,
  ) {}

  async findAll(): Promise<UserAppEntity[]> {
    return await this.userappRepository.find();
  }

  async findOne({id}: CreateUserAppDto): Promise<UserAppEntity> {
    const userapp = await this.userappRepository.findOne({id});
    if (!userapp) {
      return null;
    }
    return null;
  }

  async create(dto: CreateUserAppDto): Promise<UserAppRO> {

    // check uniqueness of username/email
    const {name, abbreviation, description} = dto;

    // create new userapp
    let newUserapp = new UserAppEntity();
    newUserapp.name = name;
    newUserapp.abbreviation = abbreviation;
    newUserapp.description = description;

    const errors = await validate(newUserapp);
    if (errors.length > 0) {
      const _errors = {userapp: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedUserapp = await this.userappRepository.save(newUserapp);
      return this.buildUserAppRO(savedUserapp);
    }
  }

  async update(id: number, dto: CreateUserAppDto): Promise<UserAppEntity> {
    let toUpdate = await this.userappRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.userappRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userappRepository.delete({ id: id});
  }

  async findById(id: number): Promise<UserAppRO>{
    const userapp = await this.userappRepository.findOne(id);

    if (!userapp) {
      const errors = {Userapp: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildUserAppRO(userapp);
  }


  private buildUserAppRO(userapp: UserAppEntity) {
    const UserAppRO = {
      id: userapp.id,
      name: userapp.name,
      abbreviation: userapp.abbreviation,
      description: userapp.description
     
    };

    return {userapp: UserAppRO};
  }
}

