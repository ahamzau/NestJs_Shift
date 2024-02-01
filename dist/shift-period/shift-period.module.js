"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftPeriodModule = void 0;
const common_1 = require("@nestjs/common");
const shift_period_service_1 = require("./shift-period.service");
const shift_period_controller_1 = require("./shift-period.controller");
const typeorm_1 = require("@nestjs/typeorm");
const shift_period_entity_1 = require("./entity/shift-period.entity");
let ShiftPeriodModule = class ShiftPeriodModule {
};
ShiftPeriodModule = __decorate([
    (0, common_1.Module)({
        providers: [shift_period_service_1.ShiftPeriodService],
        controllers: [shift_period_controller_1.ShiftPeriodController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                shift_period_entity_1.ShiftPeriod
            ])
        ]
    })
], ShiftPeriodModule);
exports.ShiftPeriodModule = ShiftPeriodModule;
//# sourceMappingURL=shift-period.module.js.map