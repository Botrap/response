import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn  } from 'typeorm';
import { RoleEntity } from '../role/role.entity';

@Entity('group')
export class GroupEntity {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column("nvarchar", { length: 100 })
  name: string;

  @Column({nullable: true})
  description: string;

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

  @ManyToOne(type => RoleEntity, role => role.groups)
  role: RoleEntity;

}
