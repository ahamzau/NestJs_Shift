import { OperationClaim } from './entity/operation-claim.entity';
import { Repository } from 'typeorm';
import { CreateOperationClaimDto } from './dto/create-operation-claim.dto';
export declare class OperationClaimService {
    private readonly operationClaimRepository;
    constructor(operationClaimRepository: Repository<OperationClaim>);
    add(createOperationClaimDto: CreateOperationClaimDto): Promise<OperationClaim>;
    getAll(): Promise<OperationClaim[]>;
    getById(operationClaimId: number): Promise<OperationClaim>;
}
