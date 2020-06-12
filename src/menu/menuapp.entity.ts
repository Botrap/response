import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { RoleMenuAppEntity } from '../role/rolemenuapp.entity';
import { MenuEntryEntity } from './menuentry.entity';

@Entity('menuapp')
export class MenuAppEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  abbreviation: string;

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

  @OneToMany(type => MenuEntryEntity, menu => menu.menuapp)
  menuentries: MenuEntryEntity[];

  @OneToOne(type => RoleMenuAppEntity)
  rolemenuapp: RoleMenuAppEntity;

}

