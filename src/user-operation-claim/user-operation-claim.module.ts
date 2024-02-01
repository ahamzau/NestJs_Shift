import { Module } from '@nestjs/common';
import { UserOperationClaimService } from './user-operation-claim.service';
import { UserOperationClaimController } from './user-operation-claim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOperationClaim } from './entity/user-operation-claim.entity';
import { UserModule } from 'src/user/user.module';
import { OperationClaimModule } from 'src/operation-claim/operation-claim.module';

@Module({
  providers: [UserOperationClaimService],
  controllers: [UserOperationClaimController],
  imports: [
    TypeOrmModule.forFeature([
      UserOperationClaim
    ]),
    UserModule,
    OperationClaimModule
  ]
})
export class UserOperationClaimModule {}
