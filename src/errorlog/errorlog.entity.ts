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
  createdat: Date;

  @Column()
  createdby: number

  @Column()
  updatedat: Date;

  @Column()
  updatedby: number;

}
