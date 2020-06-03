import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { ListEntryEntity } from './listentry.entity';

@Entity('list')
export class ListEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

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

  @OneToMany(type => ListEntryEntity, listentry => listentry.list, {eager: true})
  @JoinColumn()
  listentries: ListEntryEntity[];


}

