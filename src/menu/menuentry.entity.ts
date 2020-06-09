import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { MenuEntity } from './menu.entity';
import { MenuEntryPointEntity } from './menuentrypoint.entity';

@Entity('menuentry')
export class MenuEntryEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  caption: string;

  @ManyToOne(type => MenuEntity, menu => menu.menuentries)
  menu: MenuEntity;

  @OneToMany(type => MenuEntryPointEntity, menuentrypoint => menuentrypoint.menuentry, {eager: true})
  @JoinColumn()
  menuentrypoints: MenuEntity[];


}

