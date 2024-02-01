import { Shift, Status } from "src/shift/entity/shift.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('demand')
export class Demand {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => User, (user)=> user.id)
    user: User;
    
    @OneToMany(() => Shift, (shift)=> shift.id)
    oldShift: Shift;

    @OneToMany(() => Shift, (shift)=> shift.id)
    newShift: Shift;

    @Column({default: "beklemede"})
    status: string;

    @Column({default: true})
    isActive: boolean
}