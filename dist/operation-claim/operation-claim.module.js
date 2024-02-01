"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationClaimModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const operation_claim_entity_1 = require("./entity/operation-claim.entity");
const operation_claim_service_1 = require("./operation-claim.service");
const operation_claim_controller_1 = require("./operation-claim.controller");
let OperationClaimModule = class OperationClaimModule {
};
OperationClaimModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                operation_claim_entity_1.OperationClaim
            ])
        ],
        providers: [operation_claim_service_1.OperationClaimService],
        controllers: [operation_claim_controller_1.OperationClaimController],
        exports: [operation_claim_service_1.OperationClaimService]
    })
], OperationClaimModule);
exports.OperationClaimModule = OperationClaimModule;
//# sourceMappingURL=operation-claim.module.js.map