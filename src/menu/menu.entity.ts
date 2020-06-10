import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { MenuAppEntity } from './menuapp.entity';
import { MenuEntryEntity } from './menuentry.entity';

@Entity('menu')
export class MenuEntity {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  appid: string;

  @Column({length: 10})
  sortid: string;

  @Column()
  caption: string;

  @Column()
  caption2: string;



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

  @ManyToOne(type => MenuAppEntity, menuapp => menuapp.menus)
  menuapp: MenuAppEntity;

  @OneToMany(type => MenuEntryEntity, menuentry => menuentry.menu, {eager: true})
  @JoinColumn()
  menuentries: MenuEntity[];

}

