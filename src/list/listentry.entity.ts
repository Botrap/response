import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ListEntity } from './list.entity';

@Entity('listentry')
export class ListEntryEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 50 })
  name: string;

  @Column({nullable: true})
  description: string;
  
  @Column()
  value: string;

  @ManyToOne(type => ListEntity, list => list.listentries)
  list: ListEntity;

}

