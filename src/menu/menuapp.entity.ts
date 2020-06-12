import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { RoleMenuAppEntity } from '../role/rolemenuapp.entity';
import { MenuEntryEntity } from './menuentry.entity';

@Entity('menuapp')
export class MenuAppEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 50 })
  name: string;

  @Column({nullable: true})
  description: string;

  @Column("nvarchar", { length: 10 })
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

