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
exports.UserOperationClaimService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_operation_claim_entity_1 = require("./entity/user-operation-claim.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
const operation_claim_service_1 = require("../operation-claim/operation-claim.service");
let UserOperationClaimService = class UserOperationClaimService {
    constructor(userOperationClaimRepository, userService, operationClaimService) {
        this.userOperationClaimRepository = userOperationClaimRepository;
        this.userService = userService;
        this.operationClaimService = operationClaimService;
    }
    async add(createUserOperationClaimDto) {
        const result = await this.userOperationClaimRepository.findOne({
            where: {
                user: {
                    id: createUserOperationClaimDto.userId
                },
                operationClaim: {
                    id: createUserOperationClaimDto.operationClaimId
                }
            }
        });
        if (result)
            throw new common_1.BadRequestException("This user operation claim is already exist");
        const user = await this.userService.getById(createUserOperationClaimDto.userId);
        const operationClaim = await this.operationClaimService.getById(createUserOperationClaimDto.operationClaimId);
        if (!user || !operationClaim)
            throw new common_1.BadRequestException("There is no user or operation claim with given ids");
        const userOperationClaim = {
            id: 0,
            user: user,
            operationClaim: operationClaim,
        };
        return this.userOperationClaimRepository.save(userOperationClaim);
    }
    getAll() {
        return this.userOperationClaimRepository.find();
    }
    getByUserId(userId) {
        return this.userOperationClaimRepository.findOne({
            where: {
                user: {
                    id: userId
                }
            }
        });
    }
};
UserOperationClaimService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_operation_claim_entity_1.UserOperationClaim)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        operation_claim_service_1.OperationClaimService])
], UserOperationClaimService);
exports.UserOperationClaimService = UserOperationClaimService;
//# sourceMappingURL=user-operation-claim.service.js.map