import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('errorlog')
export class ErrorLogEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  siteid: number;

  @Column({nullable: true})
  description: string;

  @Column()
  errorcode: string;

  @Column({nullable: true})
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
