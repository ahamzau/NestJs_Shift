import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OperationClaimService } from './operation-claim.service';
import { CreateOperationClaimDto } from './dto/create-operation-claim.dto';

@Controller('operation-claim')
@UseGuards(AuthGuard('jwt'))
export class OperationClaimController {
    constructor(
        private readonly operationClaimService: OperationClaimService
    ) { }

    @Get('')
    getOperationClaims(){
        return this.operationClaimService.getAll();
    }

    @Post('')
    addOperationClaim(@Body() createOperationClaimDto: CreateOperationClaimDto){
        return this.operationClaimService.add(createOperationClaimDto);
    }
}
