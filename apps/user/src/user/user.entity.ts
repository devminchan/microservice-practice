import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface IUser {
  id: number;
  name: string;
  age: number;
}

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
