import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, CreateDateColumn, UpdateDateColumn,  JoinTable, ManyToMany, OneToMany} from 'typeorm';
import { IsEmail } from 'class-validator';
import * as argon2 from 'argon2';
import { ArticleEntity } from '../article/article.entity';
import { RoleEntity } from '../role/role.entity';

@Entity('user')

// import BaseEntity from typorm
//export class UserEntity extends BaseEntity{

export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({default: ''})
  bio: string;

  @Column({default: ''})
  image: string;

  @Column()
  password: string;

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

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }

  @ManyToMany(type => ArticleEntity)
  @JoinTable()
  favorites: ArticleEntity[];

  @OneToMany(type => ArticleEntity, article => article.author)
  articles: ArticleEntity[];

  @OneToMany(type => RoleEntity, role => role.user)
  roles: RoleEntity[];

}
