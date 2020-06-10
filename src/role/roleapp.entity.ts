import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RoleAppMenuEntity } from './roleappmenu.entity';

import { MenuEntity } from '../menu/menu.entity';

@Entity('roleapp')
export class RoleAppEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  AppId: string;

  @Column({default: false})
  active: boolean;

  @Column()
  createddate: Date;

  @Column()
  createdby: number

  @Column()
  updateddate: Date;

  @Column()
  updatedby: number;

  @ManyToOne(type => RoleEntity, role => role.roleapps)
  role: RoleEntity;

  @OneToMany(type => RoleAppMenuEntity, roleapp => roleapp.role)
  roleapps: RoleAppEntity[];

}



import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ClassNameService } from './className.service';
import { ClassName_singularDto } from './className_singular.dto';

@Controller('className')
export class ClassNameController {
  constructor(private classNameService: ClassNameService) {}

  @Get()
  getClassName() {
    return this.classNameService.getClassName();
  }

  // findOne(@Param('id') id: string):  ClassName_singularDto {
  @Get(':id')
  getClassName_singular(@Param('id') id: string): ClassName_singularDto {
    return this.classNameService.getClassName_singular(id);
  }

  @Post()
  createClassName_singular(@Body() className_singular: ClassName_singularDto) {
    this.classNameService.createClassName_singular(className_singular);
  }

  @Put()
  updateClassName_singular(@Body() className_singular: ClassName_singularDto) {
    this.classNameService.updateClassName_singular(className_singular);
  }

  /**
    * Delete className_singular
    * @param id
    */
  @Delete()
  deleteClassName_singular(@Param('id') id: string) {
    this.classNameService.deleteClassName_singular(id);
  }
}
