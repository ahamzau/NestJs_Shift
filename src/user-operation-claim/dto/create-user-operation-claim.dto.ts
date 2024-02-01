import { IsNumber } from "class-validator";

export class CreateUserOperationClaimDto{
    @IsNumber()
    userId: number;
    
    @IsNumber()
    operationClaimId: number
}