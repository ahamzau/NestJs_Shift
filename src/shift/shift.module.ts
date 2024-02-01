import { Module } from '@nestjs/common';
import { ShiftController } from './shift.controller';
import { ShiftService } from './shift.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shift } from './entity/shift.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [ShiftController],
  providers: [ShiftService],
  imports: [
    TypeOrmModule.forFeature([Shift]),
    UserModule,
  ],
  exports: [
    ShiftService
  ]
})
export class ShiftModule {}
