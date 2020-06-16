import { Entity, PrimaryGeneratedColumn, Column, OneToOne,ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn,  JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { ListEntryEntity } from './listentry.entity';

@Entity('list')
export class ListEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 50 })
  name: string;

  @Column({nullable: true})
  description: string;

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

  @OneToMany(type => ListEntryEntity, listentry => listentry.list, {eager: true})
  listentries: ListEntryEntity[];


}


