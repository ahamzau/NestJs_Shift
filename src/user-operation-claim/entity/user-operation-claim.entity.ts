import { OperationClaim } from "src/operation-claim/entity/operation-claim.entity";
import { User } from "src/user/entity/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user-operation-claims')
export class UserOperationClaim{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    user: User

    @ManyToOne(() => OperationClaim, (operationClaim) => operationClaim.id)
    operationClaim: OperationClaim
}