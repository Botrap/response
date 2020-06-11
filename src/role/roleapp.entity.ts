import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RoleAppMenuEntity } from './rolemenuapp.entity';

import { MenuEntity } from '../menu/menuentry.entity';

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
