import { OperationClaim } from "src/operation-claim/entity/operation-claim.entity";
import { User } from "src/user/entity/user.entity";
export declare class UserOperationClaim {
    id: number;
    user: User;
    operationClaim: OperationClaim;
}
