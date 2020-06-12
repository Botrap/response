import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tag')
export class TagEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 50 })
  tag: string;

  @Column()
  createddate: Date;

  @Column()
  createdby: number

  @Column()
  updateddate: Date;

  @Column()
  updatedby: number;

}
