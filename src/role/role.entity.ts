import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { SiteEntity } from '../site/site.entity';
import { GroupEntity } from '../group/group.entity';
import { RoleAppEntity } from './roleapp.entity';

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
  createddate: Date;

  @Column()
  createdby: number

  @Column()
  updateddate: Date;

  @Column()
  updatedby: number;


  // a user can have multiple roles on different sites so per site!
  @ManyToOne(type => UserEntity, user => user.roles)
  user: UserEntity;

  // a role belongs only to one site as the menu could be different!! a site can have multiple roles
  @ManyToOne(type => SiteEntity, site => site.roles)
  site: SiteEntity;

  // groups are used for data access and define on the role like in Labware
  @OneToMany(type => GroupEntity, group => group.role)
  groups: GroupEntity[];

  // a role has multiples app to be accessed
  @OneToMany(type => RoleAppEntity, roleapp => roleapp.role)
  roleapps: RoleAppEntity[];

}