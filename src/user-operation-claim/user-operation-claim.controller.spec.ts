import { Test, TestingModule } from '@nestjs/testing';
import { UserOperationClaimController } from './user-operation-claim.controller';

describe('UserOperationClaimController', () => {
  let controller: UserOperationClaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserOperationClaimController],
    }).compile();

    controller = module.get<UserOperationClaimController>(UserOperationClaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
