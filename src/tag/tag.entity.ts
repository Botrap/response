import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tag')
export class TagEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag: string;

  @Column()
  created: Date;

  @Column()
  createdby: number

  @Column()
  updated: Date;

  @Column()
  updatedby: number;

}
