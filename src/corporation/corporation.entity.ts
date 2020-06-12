import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { SiteEntity } from '../site/site.entity';

@Entity('corporation')
export class CorporationEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column("nvarchar", { length: 100 })
  name: string;

  @Column()
  costcenter: number;

  @Column({nullable: true})
  description: string;

  @Column({default: false})
  active: boolean;

  @Column()
  createddate: Date;

  @Column()
  createdby: number;

  @Column()
  updateddate: Date;

  @Column()
  updatedby: number;

  @OneToMany(type => SiteEntity, site => site.corporation)
  sites: SiteEntity[];

}

