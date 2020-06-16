import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { MenuAppEntity } from './menuapp.entity';
import { RoleMenuEntryEntity } from '../role/rolemenuentry.entity';

@Entity('menuentry')
export class MenuEntryEntity {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column("nvarchar", { length: 10 })
  appid: string;
  
  @Column("nvarchar", { length: 50 })
  sortid: string;

  @Column("nvarchar", { length: 50 })
  caption: string;

  @Column({nullable: true})
  description: string;

  @Column()
  action: string;

  @Column()
  mouseover: string;

  @Column({default: true})
  active: boolean;

  @CreateDateColumn()
  createddate: Date;

  @Column({nullable: true})
  createdby: number

  @UpdateDateColumn()
  updateddate: Date;

  @Column({nullable: true})
  updatedby: number;

  @ManyToOne(type => MenuAppEntity, menuapp => menuapp.menuentries)
  menuapp: MenuAppEntity;

  @OneToMany(type => RoleMenuEntryEntity, rolemenuentry => rolemenuentry.RoleMenuAppId)
  menuentryConnection: RoleMenuEntryEntity;





}

