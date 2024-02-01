import { Test, TestingModule } from '@nestjs/testing';
import { ShiftPeriodController } from './shift-period.controller';

describe('ShiftPeriodController', () => {
  let controller: ShiftPeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShiftPeriodController],
    }).compile();

    controller = module.get<ShiftPeriodController>(ShiftPeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
