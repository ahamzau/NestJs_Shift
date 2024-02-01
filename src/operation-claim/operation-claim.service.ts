import { BadRequestException, Injectable } from '@nestjs/common';
import { OperationClaim } from './entity/operation-claim.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { CreateOperationClaimDto } from './dto/create-operation-claim.dto';

@Injectable()
export class OperationClaimService {
    constructor(
        @InjectRepository(OperationClaim)
        private readonly operationClaimRepository: Repository<OperationClaim>
    ) {  }

    async add(createOperationClaimDto: CreateOperationClaimDto){
        createOperationClaimDto.name = createOperationClaimDto.name.toLocaleLowerCase();
        const operationClaim = this.operationClaimRepository.create(createOperationClaimDto);
        const result = await this.operationClaimRepository.findOne({
            where: {
                name: createOperationClaimDto.name
            }
        })
        if (result)
            throw new BadRequestException("This operation claim is already exist.");

        return this.operationClaimRepository.save(operationClaim);
    }

    getAll(){
        return this.operationClaimRepository.find();
    }

    getById(operationClaimId: number){
        return this.operationClaimRepository.findOne({
            where: {
                id: operationClaimId
            }
        });
    }
}
