import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationClaim } from './entity/operation-claim.entity';
import { OperationClaimService } from './operation-claim.service';
import { OperationClaimController } from './operation-claim.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OperationClaim
        ])
    ],
    providers: [OperationClaimService],
    controllers: [OperationClaimController],
    exports: [OperationClaimService]
})
export class OperationClaimModule {}
