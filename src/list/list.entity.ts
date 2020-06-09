import { Entity, PrimaryGeneratedColumn, Column, OneToOne,ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { ListEntryEntity } from './listentry.entity';

@Entity('list')
export class ListEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable: true})
  description: string;

  @Column({default: 1})
  active: boolean;

  @Column()
  createddate: Date;

  @Column()
  createdby: number

  @Column()
  updateddate: Date;

  @Column()
  updatedby: number;

  @OneToMany(type => ListEntryEntity, listentry => listentry.list, {eager: true})
  listentries: ListEntryEntity[];


}


