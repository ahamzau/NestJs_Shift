import { UserOperationClaimService } from './user-operation-claim.service';
import { CreateUserOperationClaimDto } from './dto/create-user-operation-claim.dto';
export declare class UserOperationClaimController {
    private readonly userOperationClaimService;
    constructor(userOperationClaimService: UserOperationClaimService);
    getAll(): Promise<import("./entity/user-operation-claim.entity").UserOperationClaim[]>;
    add(createUserOperationClaimDto: CreateUserOperationClaimDto): Promise<import("./entity/user-operation-claim.entity").UserOperationClaim>;
}
