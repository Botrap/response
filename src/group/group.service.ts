import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { GroupEntity } from './group.entity';
import { GroupRO } from './group.interface';
import { CreateGroupDto } from './dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly groupRepository: Repository<GroupEntity>,
  ) {}

  async findAll(): Promise<GroupEntity[]> {
    return await this.groupRepository.find();
  }

  async findOne({id}: CreateGroupDto): Promise<GroupEntity> {
    const group = await this.groupRepository.findOne({id});
    if (!group) {
      return null;
    }
    return null;
  }

  async create(dto: CreateGroupDto): Promise<GroupRO> {

    // check uniqueness of username/email
    const {name} = dto;

    // create new group
    let newGroup = new GroupEntity();
    newGroup.name = name;
   
    const errors = await validate(newGroup);
    if (errors.length > 0) {
      const _errors = {group: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedGroup = await this.groupRepository.save(newGroup);
      return this.buildGroupRO(savedGroup);
    }
  }

  async update(id: number, dto: CreateGroupDto): Promise<GroupEntity> {
    let toUpdate = await this.groupRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.groupRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.groupRepository.delete({ id: id});
  }

  async findById(id: number): Promise<GroupRO>{
    const group = await this.groupRepository.findOne(id);

    if (!group) {
      const errors = {Group: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildGroupRO(group);
  }


  private buildGroupRO(group: GroupEntity) {
    const GroupRO = {
      id: group.id,
      name: group.name,
      description: group.description
     
    };

    return {group: GroupRO};
  }
}

