import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOperationClaim } from './entity/user-operation-claim.entity';
import { Repository } from 'typeorm';
import { CreateUserOperationClaimDto } from './dto/create-user-operation-claim.dto';
import { UserService } from 'src/user/user.service';
import { OperationClaimService } from 'src/operation-claim/operation-claim.service';

@Injectable()
export class UserOperationClaimService {
    constructor(
        @InjectRepository(UserOperationClaim)
        private readonly userOperationClaimRepository: Repository<UserOperationClaim>,
        private readonly userService: UserService,
        private readonly operationClaimService: OperationClaimService,
    ) {}

    async add(createUserOperationClaimDto: CreateUserOperationClaimDto){
        const result = await this.userOperationClaimRepository.findOne({
            where: {
                user: {
                    id: createUserOperationClaimDto.userId
                },
                operationClaim: {
                    id: createUserOperationClaimDto.operationClaimId
                }
            }
        });

        
        if (result)
            throw new BadRequestException("This user operation claim is already exist");
        
        const user = await this.userService.getById(createUserOperationClaimDto.userId);
        const operationClaim = await this.operationClaimService.getById(createUserOperationClaimDto.operationClaimId);

        if (!user || !operationClaim)
            throw new BadRequestException("There is no user or operation claim with given ids");

        const userOperationClaim: UserOperationClaim = {
            id: 0,
            user: user,
            operationClaim: operationClaim,
        }

        return this.userOperationClaimRepository.save(userOperationClaim);
    }

    getAll(){
        return this.userOperationClaimRepository.find();
    }

    getByUserId(userId: number){
        return this.userOperationClaimRepository.findOne({
            where: {
                user: {
                    id: userId
                }
            }
        });
    }
}
