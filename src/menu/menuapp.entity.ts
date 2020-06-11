import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
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

  @ManyToOne(type => RoleEntity, role => role.roleapps)
  role: RoleEntity;

  @OneToMany(type => MenuEntryEntity, menu => menu.menuapp)
  menuentries: MenuEntryEntity[];

}

