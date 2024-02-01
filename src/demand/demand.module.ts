import { Module } from '@nestjs/common';
import { DemandService } from './demand.service';
import { DemandController } from './demand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demand } from './entity/demand.entity';
import { ShiftModule } from 'src/shift/shift.module';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [DemandService],
  controllers: [DemandController],
  imports: [
    TypeOrmModule.forFeature([Demand]),
    ShiftModule,
    UserModule,
  ]
})
export class DemandModule {}
