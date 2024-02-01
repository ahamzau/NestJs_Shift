import { Module } from '@nestjs/common';
import { ShiftPeriodService } from './shift-period.service';
import { ShiftPeriodController } from './shift-period.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShiftPeriod } from './entity/shift-period.entity';

@Module({
  providers: [ShiftPeriodService],
  controllers: [ShiftPeriodController],
  imports: [
    TypeOrmModule.forFeature([
      ShiftPeriod
    ])
  ]
})
export class ShiftPeriodModule {}
