import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { RoleEntity } from './role.entity';
import { MenuAppEntity } from '../menu/menuapp.entity';
import { RoleMenuEntryEntity } from '../role/rolemenuentry.entity';

@Entity('rolemenuapp')
export class RoleMenuAppEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  RoleId: number;

  @Column()
  MenuAppId: number;

  @ManyToOne(type => RoleEntity, role => role.rolemenuapps)
  role: RoleEntity;

  @OneToOne(type => MenuAppEntity)
  menuapp: MenuAppEntity;
  
  @OneToMany(type => RoleMenuEntryEntity, rolemenuentry => rolemenuentry.MenuEntryId)
  rolemenuappConnection: RoleMenuEntryEntity;


}
