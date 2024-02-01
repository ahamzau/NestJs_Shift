"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperationClaim = void 0;
const operation_claim_entity_1 = require("../../operation-claim/entity/operation-claim.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const typeorm_1 = require("typeorm");
let UserOperationClaim = class UserOperationClaim {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserOperationClaim.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id),
    __metadata("design:type", user_entity_1.User)
], UserOperationClaim.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => operation_claim_entity_1.OperationClaim, (operationClaim) => operationClaim.id),
    __metadata("design:type", operation_claim_entity_1.OperationClaim)
], UserOperationClaim.prototype, "operationClaim", void 0);
UserOperationClaim = __decorate([
    (0, typeorm_1.Entity)('user-operation-claims')
], UserOperationClaim);
exports.UserOperationClaim = UserOperationClaim;
//# sourceMappingURL=user-operation-claim.entity.js.map