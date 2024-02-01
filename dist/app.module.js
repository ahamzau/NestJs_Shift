"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/entity/user.entity");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const operation_claim_module_1 = require("./operation-claim/operation-claim.module");
const operation_claim_entity_1 = require("./operation-claim/entity/operation-claim.entity");
const user_operation_claim_module_1 = require("./user-operation-claim/user-operation-claim.module");
const user_operation_claim_entity_1 = require("./user-operation-claim/entity/user-operation-claim.entity");
const refresh_token_entity_1 = require("./auth/entity/refresh-token.entity");
const shift_module_1 = require("./shift/shift.module");
const shift_entity_1 = require("./shift/entity/shift.entity");
const shift_period_module_1 = require("./shift-period/shift-period.module");
const shift_period_entity_1 = require("./shift-period/entity/shift-period.entity");
const demand_module_1 = require("./demand/demand.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DATABASE_HOST,
                port: +process.env.DATABASE_PORT,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_DATABASE,
                entities: [
                    user_entity_1.User,
                    operation_claim_entity_1.OperationClaim,
                    user_operation_claim_entity_1.UserOperationClaim,
                    shift_entity_1.Shift,
                    refresh_token_entity_1.RefreshToken,
                    shift_period_entity_1.ShiftPeriod
                ],
                synchronize: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            shift_module_1.ShiftModule,
            operation_claim_module_1.OperationClaimModule,
            user_operation_claim_module_1.UserOperationClaimModule,
            shift_period_module_1.ShiftPeriodModule,
            demand_module_1.DemandModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map