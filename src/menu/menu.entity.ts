import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { UserAppEntity } from '../userapp/userapp.entity';
import { MenuEntryEntity } from './menuentry.entity';

@Entity('menu')
export class MenuEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  appid: string;

  @Column()
  caption: string;

  @Column()
  sortid: string;

  @Column({default: false})
  active: boolean;

  @Column()
  createdat: Date;

  @Column()
  createdby: number

  @Column()
  updatedat: Date;

  @Column()
  updatedby: number;

  @ManyToOne(type => UserAppEntity, userapp => userapp.menus)
  userapp: UserAppEntity;

  @OneToMany(type => MenuEntryEntity, menuentry => menuentry.menu, {eager: true})
  @JoinColumn()
  menuentries: MenuEntity[];

}
