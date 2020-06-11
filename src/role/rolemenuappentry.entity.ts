import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { RoleAppEntity } from './roleapp.entity';
import { MenuEntity } from '../menu/menuentry.entity';

@Entity('roleappmenu')
export class RoleAppMenuEntity {

  @PrimaryGeneratedColumn()
  id: number;

//  @Column()
//  RoleId: number;

  @Column()
  AppId: number;

  @Column()
  MenuId: string;

  @ManyToOne(type => RoleAppEntity, role => role.roleapps)
  role: RoleAppEntity;

// to approleid onetomany
// to menuentry manytoone
//from menu entry you get the application id!

}
