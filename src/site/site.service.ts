import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { SiteEntity } from './site.entity';
import { SiteRO } from './site.interface';
import { CreateSiteDto } from './dto';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(SiteEntity)
    private readonly siteRepository: Repository<SiteEntity>,
  ) {}

  async findAll(): Promise<SiteEntity[]> {
    return await this.siteRepository.find();
  }

  async findOne({id}: CreateSiteDto): Promise<SiteEntity> {
    const site = await this.siteRepository.findOne({id});
    if (!site) {
      return null;
    }
    return null;
  }

  async create(dto: CreateSiteDto): Promise<SiteRO> {

    // check uniqueness of username/email
    const {name, costcenter, description} = dto;

    // create new site
    let newSite = new SiteEntity();
    newSite.name = name;
    newSite.costcenter = costcenter;
    newSite.description = description;

    const errors = await validate(newSite);
    if (errors.length > 0) {
      const _errors = {site: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedSite = await this.siteRepository.save(newSite);
      return this.buildSiteRO(savedSite);
    }
  }

  async update(id: number, dto: CreateSiteDto): Promise<SiteEntity> {
    let toUpdate = await this.siteRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    return await this.siteRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.siteRepository.delete({ id: id});
  }

  async findById(id: number): Promise<SiteRO>{
    const site = await this.siteRepository.findOne(id);

    if (!site) {
      const errors = {Site: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildSiteRO(site);
  }


  private buildSiteRO(site: SiteEntity) {
    const SiteRO = {
      id: site.id,
      name: site.name,
      costcenter: site.costcenter,
      description: site.description
     
    };

    return {site: SiteRO};
  }
}

