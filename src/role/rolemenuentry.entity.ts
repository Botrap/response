import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MenuEntryEntity } from '../menu/menuentry.entity';
import { RoleMenuAppEntity } from '../role/rolemenuapp.entity';

@Entity('rolemenuentry')
export class RoleMenuEntity {

  @PrimaryColumn()
  RoleMenuAppId: number;

  @PrimaryColumn()
  MenuEntryId: number;

  @ManyToOne(type => RoleMenuAppEntity, rolemenuapp => rolemenuapp.rolemenuappConnection, { primary: true })
  @JoinColumn({ name: "RoleMenuAppId"})
  rolemenuapp: RoleMenuAppEntity;

  @ManyToOne(type => MenuEntryEntity, menuentry => menuentry.menuentryConnection, { primary: true })
  @JoinColumn({ name: "MenuEntryId"})
  menuentry: MenuEntryEntity;

}
