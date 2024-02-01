"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandModule = void 0;
const common_1 = require("@nestjs/common");
const demand_service_1 = require("./demand.service");
const demand_controller_1 = require("./demand.controller");
const typeorm_1 = require("@nestjs/typeorm");
const demand_entity_1 = require("./entity/demand.entity");
const shift_module_1 = require("../shift/shift.module");
const user_module_1 = require("../user/user.module");
let DemandModule = class DemandModule {
};
DemandModule = __decorate([
    (0, common_1.Module)({
        providers: [demand_service_1.DemandService],
        controllers: [demand_controller_1.DemandController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([demand_entity_1.Demand]),
            shift_module_1.ShiftModule,
            user_module_1.UserModule,
        ]
    })
], DemandModule);
exports.DemandModule = DemandModule;
//# sourceMappingURL=demand.module.js.map