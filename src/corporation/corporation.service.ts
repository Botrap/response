import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { CorporationEntity } from './corporation.entity';
import { CorporationRO } from './corporation.interface';
import { CreateCorporationDto } from './dto';

@Injectable()
export class CorporationService {
  constructor(
    @InjectRepository(CorporationEntity)
    private readonly corporationRepository: Repository<CorporationEntity>, 
  ) {}

  
  async findAll(): Promise<CorporationEntity[]> {
    return await this.corporationRepository.find();
  }

  async findOne({id}: CreateCorporationDto): Promise<CorporationEntity> {
    const corporation = await this.corporationRepository.findOne({id});
    if (!corporation) {
      return null;
    }
    return null;
  }

  async create(dto: CreateCorporationDto): Promise<CorporationRO> {

    // check uniqueness of username/email
    const {name, costcenter, description} = dto;

    // create new corporation
    let newCorporation = new CorporationEntity();
    newCorporation.name = name;
    newCorporation.costcenter = costcenter;
    newCorporation.description = description;

    const errors = await validate(newCorporation);
    if (errors.length > 0) {
      const _errors = {corporation: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedCorporation = await this.corporationRepository.save(newCorporation);
      return this.buildCorporationRO(savedCorporation);
    }
  }

  async update(id: number, dto: CreateCorporationDto): Promise<CorporationEntity> {
    let toUpdate = await this.corporationRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.corporationRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.corporationRepository.delete({ id: id});
  }

  async findById(id: number): Promise<CorporationRO>{
    const corporation = await this.corporationRepository.findOne(id);

    if (!corporation) {
      const errors = {Corporation: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildCorporationRO(corporation);
  }


  private buildCorporationRO(corporation: CorporationEntity) {
    const CorporationRO = {
      id: corporation.id,
      slug: corporation.slug,
      name: corporation.name,
      costcenter: corporation.costcenter,
      description: corporation.description
     
    };

    return {corporation: CorporationRO};
  }
}

