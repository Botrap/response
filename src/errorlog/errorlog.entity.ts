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

  //@Column()
  @Column({nullable: true})
  createddate: Date;

  @Column({nullable: true})
  createdby: number

  @Column({nullable: true})
  updateddate: Date;

  @Column({nullable: true})
  updatedby: number;

}
