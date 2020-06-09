import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { SiteEntity } from '../site/site.entity';
import { GroupEntity } from '../group/group.entity';
import { UserAppEntity } from '../userapp/userapp.entity';

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

  @ManyToOne(type => SiteEntity, site => site.roles)
  site: SiteEntity;

  @OneToMany(type => GroupEntity, group => group.role)
  groups: GroupEntity[];

  @OneToMany(type => UserAppEntity, userapp => userapp.role)
  userapps: UserAppEntity[];




}