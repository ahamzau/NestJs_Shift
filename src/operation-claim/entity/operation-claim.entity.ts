import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operation-claims')
export class OperationClaim{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}