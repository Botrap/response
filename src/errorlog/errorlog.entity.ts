import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('errorlog')
export class ErrorLogEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  siteid: number;

  @Column()
  description: string;

  @Column()
  errorcode: string;

  @Column()
  errorcodehtml: string;

  @Column()
  created: Date;

  @Column()
  createdby: number

  @Column()
  updated: Date;

  @Column()
  updatedby: number;

}
