import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { RoleEntity } from './role.entity';
import { RoleRO } from './role.interface';
import { CreateRoleDto } from './dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async findAll(): Promise<RoleEntity[]> {
    return await this.roleRepository.find();
  }

  async findOne({id}: CreateRoleDto): Promise<RoleEntity> {
    const role = await this.roleRepository.findOne({id});
    if (!role) {
      return null;
    }
    return null;
  }

  async create(dto: CreateRoleDto): Promise<RoleRO> {

    // check uniqueness of username/email
    const {name, costcenter, description} = dto;

    // create new role
    let newRole = new RoleEntity();
    newRole.name = name;
    newRole.costcenter = costcenter;
    newRole.description = description;

    const errors = await validate(newRole);
    if (errors.length > 0) {
      const _errors = {role: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedRole = await this.roleRepository.save(newRole);
      return this.buildRoleRO(savedRole);
    }
  }

  async update(id: number, dto: CreateRoleDto): Promise<RoleEntity> {
    let toUpdate = await this.roleRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.roleRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.roleRepository.delete({ id: id});
  }

  async findById(id: number): Promise<RoleRO>{
    const role = await this.roleRepository.findOne(id);

    if (!role) {
      const errors = {Role: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildRoleRO(role);
  }


  private buildRoleRO(role: RoleEntity) {
    const RoleRO = {
      id: role.id,
      name: role.name,
      costcenter: role.costcenter,
      description: role.description
     
    };

    return {role: RoleRO};
  }
}

