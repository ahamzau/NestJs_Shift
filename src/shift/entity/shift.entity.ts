import { User } from 'src/user/entity/user.entity';
import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shift')
export class Shift {
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToMany(() => User, (user)=> user.id)
  assignee: User

  @OneToMany(() => User, (user)=> user.id)
  assigned: User

  @Column({type: 'timestamp without time zone'})
  startDate: Date

  @Column({type: 'timestamp without time zone'})
  finishDate: Date

  @Column()
  status: Status

  @CreateDateColumn()
  createdAt: Date;

  @Column({type: 'timestamp without time zone', nullable: true})
  updatedAt: Date

  @Column()
  isActive: boolean

  @Column()
  place: string
}

export enum Status {
    planned = 0,
    accepted = 1,
    modified = 2
}