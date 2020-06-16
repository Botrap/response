import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CorporationEntity } from '../corporation/corporation.entity';
import { RoleEntity } from '../role/role.entity';

@Entity('site')
export class SiteEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 100 })
  name: string;

  @Column({nullable: true})
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

  @ManyToOne(type => CorporationEntity, corporation => corporation.sites)
  corporation: CorporationEntity;

  @OneToMany(type => RoleEntity, role => role.site)
  roles: RoleEntity[];

}

