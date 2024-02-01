import { UserOperationClaim } from './entity/user-operation-claim.entity';
import { Repository } from 'typeorm';
import { CreateUserOperationClaimDto } from './dto/create-user-operation-claim.dto';
import { UserService } from 'src/user/user.service';
import { OperationClaimService } from 'src/operation-claim/operation-claim.service';
export declare class UserOperationClaimService {
    private readonly userOperationClaimRepository;
    private readonly userService;
    private readonly operationClaimService;
    constructor(userOperationClaimRepository: Repository<UserOperationClaim>, userService: UserService, operationClaimService: OperationClaimService);
    add(createUserOperationClaimDto: CreateUserOperationClaimDto): Promise<UserOperationClaim>;
    getAll(): Promise<UserOperationClaim[]>;
    getByUserId(userId: number): Promise<UserOperationClaim>;
}
