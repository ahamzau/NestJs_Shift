import { OperationClaimService } from './operation-claim.service';
import { CreateOperationClaimDto } from './dto/create-operation-claim.dto';
export declare class OperationClaimController {
    private readonly operationClaimService;
    constructor(operationClaimService: OperationClaimService);
    getOperationClaims(): Promise<import("./entity/operation-claim.entity").OperationClaim[]>;
    addOperationClaim(createOperationClaimDto: CreateOperationClaimDto): Promise<import("./entity/operation-claim.entity").OperationClaim>;
}
