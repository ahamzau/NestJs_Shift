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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAll() {
        return this.userRepository.find();
    }
    async add(user) {
        const userdata = await this.userRepository
            .createQueryBuilder('user')
            .where('user.email = :email', { email: user.email })
            .orWhere('user.username = :username', { username: user.username })
            .getOne();
        if (userdata) {
            throw new common_1.BadRequestException('A user is already registered with these credentials.');
        }
        return this.userRepository.save(user);
    }
    getByEmail(email) {
        return this.userRepository.findOne({ where: { email: email } });
    }
    getById(id) {
        return this.userRepository.findOne({ where: { id: id } });
    }
    async getCurrentUser(email) {
        return this.userRepository.findOne({
            where: { email: email },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                username: true,
            },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map