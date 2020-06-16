import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { SiteEntity } from '../site/site.entity';
import { GroupEntity } from '../group/group.entity';
import { RoleMenuAppEntity } from './rolemenuapp.entity';

@Entity('role')
export class RoleEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 50 })
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
  @OneToMany(type => RoleMenuAppEntity, rolemenuapp => rolemenuapp.role)
  rolemenuapps: RoleMenuAppEntity[];


}

