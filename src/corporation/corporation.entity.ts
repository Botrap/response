import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn,  JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
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

  @OneToMany(type => SiteEntity, site => site.corporation)
  sites: SiteEntity[];

}

