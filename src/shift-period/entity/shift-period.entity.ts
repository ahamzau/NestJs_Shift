import { Status } from "cloudinary";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shift-period')
export class ShiftPeriod {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'timestamp without time zone' })
    startDate: Date

    @Column({ type: 'timestamp without time zone' })
    finishDate: Date

    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'timestamp without time zone', nullable: true })
    updatedAt: Date

    @Column({default: true})
    isActive: boolean
}