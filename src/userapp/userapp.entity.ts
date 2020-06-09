import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { MenuEntity } from '../menu/menu.entity';

@Entity('userapp')
export class UserAppEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  abbreviation: string;

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

  @ManyToOne(type => RoleEntity, role => role.userapps)
  role: RoleEntity;

  @OneToMany(type => MenuEntity, menu => menu.userapp)
  menus: UserAppEntity[];

}
