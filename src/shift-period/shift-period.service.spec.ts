import { Test, TestingModule } from '@nestjs/testing';
import { ShiftPeriodService } from './shift-period.service';

describe('ShiftPeriodService', () => {
  let service: ShiftPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShiftPeriodService],
    }).compile();

    service = module.get<ShiftPeriodService>(ShiftPeriodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
