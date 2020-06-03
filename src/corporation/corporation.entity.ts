import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { SiteEntity } from '../site/site.entity';

@Entity('corporation')
export class CorporationEntity {

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

  @OneToMany(type => SiteEntity, siteentry => siteentry.corporation, {eager: true})
  @JoinColumn()
  sites: SiteEntity[];

}
