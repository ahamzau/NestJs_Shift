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
exports.ShiftPeriod = void 0;
const typeorm_1 = require("typeorm");
let ShiftPeriod = class ShiftPeriod {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ShiftPeriod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], ShiftPeriod.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], ShiftPeriod.prototype, "finishDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ShiftPeriod.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", Date)
], ShiftPeriod.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ShiftPeriod.prototype, "isActive", void 0);
ShiftPeriod = __decorate([
    (0, typeorm_1.Entity)('shift-period')
], ShiftPeriod);
exports.ShiftPeriod = ShiftPeriod;
//# sourceMappingURL=shift-period.entity.js.map