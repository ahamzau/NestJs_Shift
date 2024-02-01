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
exports.Demand = void 0;
const shift_entity_1 = require("../../shift/entity/shift.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const typeorm_1 = require("typeorm");
let Demand = class Demand {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Demand.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.id),
    __metadata("design:type", user_entity_1.User)
], Demand.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shift_entity_1.Shift, (shift) => shift.id),
    __metadata("design:type", shift_entity_1.Shift)
], Demand.prototype, "oldShift", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shift_entity_1.Shift, (shift) => shift.id),
    __metadata("design:type", shift_entity_1.Shift)
], Demand.prototype, "newShift", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "beklemede" }),
    __metadata("design:type", String)
], Demand.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Demand.prototype, "isActive", void 0);
Demand = __decorate([
    (0, typeorm_1.Entity)('demand')
], Demand);
exports.Demand = Demand;
//# sourceMappingURL=demand.entity.js.map