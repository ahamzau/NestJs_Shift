import { User } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('refresh-tokens')
export class RefreshToken{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column("timestamp without time zone")
    expires: Date

    @CreateDateColumn()
    created: Date

    @Column()
    createdByIp: string;

    @Column("timestamp without time zone", {nullable: true})
    revoked: Date

    @Column({nullable: true})
    revokedByIp: string

    @Column({nullable: true})
    replacedByToken: string

    @Column({nullable: true})
    reasonRevoked: string

    @ManyToOne(() => User, (user) => user.id)
    user: User
}