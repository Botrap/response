import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { CorporationEntity } from '../corporation/corporation.entity';
import { RoleEntity } from '../role/role.entity';

@Entity('site')
export class SiteEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  name: string;

  @Column()
  costcenter: number;

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

  @ManyToOne(type => CorporationEntity, corporation => corporation.sites)
  corporation: CorporationEntity;

  @OneToMany(type => RoleEntity, role => role.site)
  roles: RoleEntity[];

}

