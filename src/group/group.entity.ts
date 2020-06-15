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

  @Column({nullable: true, default: 1})
  active: boolean = true;

  @Column({nullable: true})
  createddate: Date;

  @Column({nullable: true})
  createdby: number

  @Column({nullable: true})
  updateddate: Date;

  @Column({nullable: true})
  updatedby: number;

  @ManyToOne(type => RoleEntity, role => role.groups)
  role: RoleEntity;

}
