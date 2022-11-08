import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity('todos')
@ObjectType()
export class ToDo {
  // @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(() => Int)
  id: number;

  // @Column()
  @Field()
  title: string;
}
