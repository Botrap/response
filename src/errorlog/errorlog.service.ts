import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';

import { ErrorLogEntity } from './errorlog.entity';
import { ErrorLogRO } from './errorlog.interface';
import { CreateErrorLogDto } from './dto';

@Injectable()
export class ErrorlogService {
  constructor(
    @InjectRepository(ErrorLogEntity)
    private readonly ErrorLogRepository: Repository<ErrorLogEntity>,
  ) {}

  async findAll(): Promise<ErrorLogEntity[]> {
    return await this.ErrorLogRepository.find();
  }

  async create(dto: CreateErrorLogDto): Promise<ErrorLogRO> {

    // check uniqueness of group
    const {siteid, description,errorcode ,errorcodehtml } = dto;

    // create new errorlog entry
    let newErrorLog = new ErrorLogEntity();
    newErrorLog.siteid = siteid;
    newErrorLog.description = description;
    newErrorLog.errorcode = errorcode;
    newErrorLog.errorcodehtml = errorcodehtml;

    const errors = await validate(newErrorLog);
    if (errors.length > 0) {
      const _errors = {ErrorLog: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedErrorLog = await this.ErrorLogRepository.save(newErrorLog);
      return this.buildErrorLogRO(savedErrorLog);
    }
  }


  async update(id: number, dto: CreateErrorLogDto): Promise<ErrorLogEntity> {
    let toUpdate = await this.ErrorLogRepository.findOne(id);

    let updated = Object.assign(toUpdate, dto);
    const errorlog  = this.ErrorLogRepository.save(updated);

    if (!errorlog) {
      const errors = {ErrorLog: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return await this.ErrorLogRepository.save(updated);

  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.ErrorLogRepository.delete({ id: id});
  }

  async findById(id: number): Promise<ErrorLogRO>{
    const errorlog = await this.ErrorLogRepository.findOne(id);

    if (!errorlog) {
      const errors = {ErrorLog: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildErrorLogRO(errorlog);
  }


  private buildErrorLogRO(errorlog: ErrorLogEntity) {
    const ErrorLogRO = {

    siteid: errorlog.siteid,
    description: errorlog.description,
    errorcode: errorlog.errorcode,
    errorcodehtml: errorlog.errorcodehtml
     
    };

    return {errorlog: ErrorLogRO};
  }
}

