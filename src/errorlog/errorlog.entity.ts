import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('errorlog')
export class ErrorLogEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  siteid: number;

  @Column({nullable: true})
  description: string;

  @Column("nvarchar", { length: 10 })
  errorcode: string;

  @Column("nvarchar",{length: 10 , nullable: true})
  errorcodehtml: string;

  @Column()
  createddate: Date;

  @Column()
  createdby: number

  @Column()
  updateddate: Date;

  @Column()
  updatedby: number;

}
