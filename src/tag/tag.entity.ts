import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,  } from 'typeorm';

@Entity('tag')
export class TagEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 50 })
  tag: string;

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

}
