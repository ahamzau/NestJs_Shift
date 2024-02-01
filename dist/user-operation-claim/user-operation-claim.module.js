"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperationClaimModule = void 0;
const common_1 = require("@nestjs/common");
const user_operation_claim_service_1 = require("./user-operation-claim.service");
const user_operation_claim_controller_1 = require("./user-operation-claim.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_operation_claim_entity_1 = require("./entity/user-operation-claim.entity");
const user_module_1 = require("../user/user.module");
const operation_claim_module_1 = require("../operation-claim/operation-claim.module");
let UserOperationClaimModule = class UserOperationClaimModule {
};
UserOperationClaimModule = __decorate([
    (0, common_1.Module)({
        providers: [user_operation_claim_service_1.UserOperationClaimService],
        controllers: [user_operation_claim_controller_1.UserOperationClaimController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_operation_claim_entity_1.UserOperationClaim
            ]),
            user_module_1.UserModule,
            operation_claim_module_1.OperationClaimModule
        ]
    })
], UserOperationClaimModule);
exports.UserOperationClaimModule = UserOperationClaimModule;
//# sourceMappingURL=user-operation-claim.module.js.map