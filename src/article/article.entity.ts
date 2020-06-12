import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { Comment } from './comment.entity';

@Entity('article')
export class ArticleEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 100 })
  slug: string;

  @Column("nvarchar", { length: 100 })
  title: string;

  @Column({nullable: true, default: ''})
  description: string;

  @Column({default: ''})
  body: string;

  @Column()
  createddate: Date;

  @Column()
  createdby: number;

  @Column()
  updateddate: Date;

  @Column()
  updatedby: number;

  @Column('simple-array')
  tagList: string[];

  @ManyToOne(type => UserEntity, user => user.articles)
  author: UserEntity;

  @OneToMany(type => Comment, comment => comment.article, {eager: true})
  @JoinColumn()
  comments: Comment[];

  @Column({default: 0})
  favoriteCount: number;
}