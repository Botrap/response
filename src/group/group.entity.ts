import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { RoleEntity } from '../role/role.entity';

@Entity('group')
export class GroupEntity {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column("nvarchar", { length: 100 })
  name: string;

  @Column({nullable: true})
  description: string;

  @Column()
  active: boolean = false;

  @Column()
  createddate: Date;

  @Column()
  createdby: number

  @Column()
  updateddate: Date;

  @Column()
  updatedby: number;

  @ManyToOne(type => RoleEntity, role => role.groups)
  role: RoleEntity;

}
