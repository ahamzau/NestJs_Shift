import { Test, TestingModule } from '@nestjs/testing';
import { OperationClaimController } from './operation-claim.controller';

describe('OperationClaimController', () => {
  let controller: OperationClaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationClaimController],
    }).compile();

    controller = module.get<OperationClaimController>(OperationClaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
