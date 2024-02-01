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
exports.Status = exports.Shift = void 0;
const user_entity_1 = require("../../user/entity/user.entity");
const typeorm_1 = require("typeorm");
let Shift = class Shift {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Shift.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.id),
    __metadata("design:type", user_entity_1.User)
], Shift.prototype, "assignee", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.id),
    __metadata("design:type", user_entity_1.User)
], Shift.prototype, "assigned", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], Shift.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], Shift.prototype, "finishDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Shift.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Shift.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", Date)
], Shift.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Shift.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Shift.prototype, "place", void 0);
Shift = __decorate([
    (0, typeorm_1.Entity)('shift')
], Shift);
exports.Shift = Shift;
var Status;
(function (Status) {
    Status[Status["planned"] = 0] = "planned";
    Status[Status["accepted"] = 1] = "accepted";
    Status[Status["modified"] = 2] = "modified";
})(Status = exports.Status || (exports.Status = {}));
//# sourceMappingURL=shift.entity.js.map