import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { SiteEntity } from '../site/site.entity';

@Entity('corporation')
export class CorporationEntity {

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
  createdby: number;

  @Column()
  updatedat: Date;

  @Column()
  updatedby: number;

  @OneToMany(type => SiteEntity, siteentry => siteentry.corporation, {eager: true})
  @JoinColumn()
  sites: SiteEntity[];

}
