import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { GroupEntity } from '../group/group.entity';

@Entity('role')
export class RoleEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({default: false})
  active: boolean;

  @Column()
  createdat: Date;

  @Column()
  createdby: number

  @Column()
  updatedat: Date;

  @Column()
  updatedby: number;

  @ManyToOne(type => UserEntity, user => user.roles)
  user: UserEntity;

  @OneToMany(type => GroupEntity, group => group.role, {eager: true})
  @JoinColumn()
  groups: RoleEntity[];

  
}


