import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserOperationClaimService } from './user-operation-claim.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserOperationClaimDto } from './dto/create-user-operation-claim.dto';

@Controller('user-operation-claim')
@UseGuards(AuthGuard('jwt'))
export class UserOperationClaimController {
    constructor(
        private readonly userOperationClaimService: UserOperationClaimService
    ) { }


    @Get('')
    getAll(){
        return this.userOperationClaimService.getAll();
    }

    @Post('')
    add(@Body() createUserOperationClaimDto: CreateUserOperationClaimDto){
        return this.userOperationClaimService.add(createUserOperationClaimDto);
    }
}
