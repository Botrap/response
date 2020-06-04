import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MenuEntryEntity } from './menuentry.entity';

@Entity('menuentrypoint')
export class MenuEntryPointEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  groupid: number;

  @Column()
  appid: number;

  @Column()
  menuentrypoint: string;

  @Column()
  sortid: string;

  @Column({default: false})
  active: boolean;

  @Column()
  created: Date;

  @Column()
  createdby: number

  @Column()
  updated: Date;

  @Column()
  updatedby: number;

  @ManyToOne(type => MenuEntryEntity, menuentry => menuentry.menuentrypoints)
  menuentry: MenuEntryEntity;


}
