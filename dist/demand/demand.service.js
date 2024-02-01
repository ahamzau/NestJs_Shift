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
exports.DemandService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const demand_entity_1 = require("./entity/demand.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
const shift_service_1 = require("../shift/shift.service");
let DemandService = class DemandService {
    constructor(demandRepository, userService, shiftService) {
        this.demandRepository = demandRepository;
        this.userService = userService;
        this.shiftService = shiftService;
    }
    async add(createDemandDto) {
        const user = await this.userService.getById(createDemandDto.userId);
        const oldShift = await this.shiftService.getById(createDemandDto.oldShiftId);
        const newShift = await this.shiftService.getById(createDemandDto.newShiftId);
        if (!user || !oldShift || !newShift) {
            throw new common_1.BadRequestException();
        }
        const demand = {
            id: 0,
            user: user,
            oldShift: oldShift,
            newShift: newShift,
            status: createDemandDto.status,
            isActive: false
        };
        return this.demandRepository.save(demand);
    }
    getAll() {
        return this.demandRepository.find();
    }
};
DemandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(demand_entity_1.Demand)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        shift_service_1.ShiftService])
], DemandService);
exports.DemandService = DemandService;
//# sourceMappingURL=demand.service.js.map