import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { MenuAppEntity } from './menuapp.entity';
import { RoleMenuAppEntity } from '../role/rolemenuapp.entity';
import { RoleMenuEntryEntity } from '../role/rolemenuentry.entity';

@Entity('menuentry')
export class MenuEntryEntity {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  appid: string;

  @Column({length: 10})
  sortid: string;

  @Column()
  caption: string;

  @Column({default: false})
  active: boolean;

  @Column()
  action: string;

  @Column()
  mouseover: string;

  @CreateDateColumn()
  createddate: Date;

  @Column()
  createdby: number

  @UpdateDateColumn()
  updateddate: Date;

  @Column()
  updatedby: number;

  @ManyToOne(type => MenuAppEntity, menuapp => menuapp.menuentries)
  menuapp: MenuAppEntity;

  @OneToMany(type => MenuEntryEntity, menuentry => menuentry.id)
  menuentryConnection: MenuEntryEntity;

}

