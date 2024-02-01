import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OperationClaimModule } from './operation-claim/operation-claim.module';
import { OperationClaim } from './operation-claim/entity/operation-claim.entity';
import { UserOperationClaimModule } from './user-operation-claim/user-operation-claim.module';
import { UserOperationClaim } from './user-operation-claim/entity/user-operation-claim.entity';
import { RefreshToken } from './auth/entity/refresh-token.entity';
import { ShiftModule } from './shift/shift.module';
import { Shift } from './shift/entity/shift.entity';
import { ShiftPeriodModule } from './shift-period/shift-period.module';
import { ShiftPeriod } from './shift-period/entity/shift-period.entity';
import { DemandModule } from './demand/demand.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [
        User,
        OperationClaim,
        UserOperationClaim,
        Shift,
        RefreshToken,
        ShiftPeriod
      ],
      synchronize: true,
      // ssl: {
      //   rejectUnauthorized: false,
      // }
    }),
    UserModule,
    AuthModule,
    ShiftModule,
    OperationClaimModule,
    UserOperationClaimModule,
    ShiftPeriodModule,
    DemandModule,
  ],
})
export class AppModule {}
