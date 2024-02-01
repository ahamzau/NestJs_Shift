import { IsString } from "class-validator"

export class CreateOperationClaimDto{

    @IsString()
    name: string
}