import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { CorporationEntity } from '../corporation/corporation.entity';
import { UserAppEntity } from '../userapp/userapp.entity';

@Entity('site')
export class SiteEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  costcenter: number;

  @Column()
  description: string;

  @Column({default: false})
  active: boolean;

  @Column()
  created: Date;

  @Column()
  createdby: number

  @Column()
  updated: Date;

  @Column()
  updatedby: number;

  @ManyToOne(type => CorporationEntity, corporation => corporation.sites)
  corporation: CorporationEntity;

  @OneToMany(type => UserAppEntity, userapp => userapp.site, {eager: true})
  @JoinColumn()
  userapps: SiteEntity[];

}
