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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperationClaimController = void 0;
const common_1 = require("@nestjs/common");
const user_operation_claim_service_1 = require("./user-operation-claim.service");
const passport_1 = require("@nestjs/passport");
const create_user_operation_claim_dto_1 = require("./dto/create-user-operation-claim.dto");
let UserOperationClaimController = class UserOperationClaimController {
    constructor(userOperationClaimService) {
        this.userOperationClaimService = userOperationClaimService;
    }
    getAll() {
        return this.userOperationClaimService.getAll();
    }
    add(createUserOperationClaimDto) {
        return this.userOperationClaimService.add(createUserOperationClaimDto);
    }
};
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserOperationClaimController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_operation_claim_dto_1.CreateUserOperationClaimDto]),
    __metadata("design:returntype", void 0)
], UserOperationClaimController.prototype, "add", null);
UserOperationClaimController = __decorate([
    (0, common_1.Controller)('user-operation-claim'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [user_operation_claim_service_1.UserOperationClaimService])
], UserOperationClaimController);
exports.UserOperationClaimController = UserOperationClaimController;
//# sourceMappingURL=user-operation-claim.controller.js.map