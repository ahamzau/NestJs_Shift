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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../user/entity/user.entity");
const user_service_1 = require("../user/user.service");
const crypto_1 = require("crypto");
const refresh_token_entity_1 = require("./entity/refresh-token.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(jwt, userService, refreshTokenRepository) {
        this.jwt = jwt;
        this.userService = userService;
        this.refreshTokenRepository = refreshTokenRepository;
    }
    async signin(userDto) {
        const user = await this.userService.getByEmail(userDto.email);
        const hmac = (0, crypto_1.createHmac)('SHA512', user.passwordSalt);
        hmac.update(userDto.password);
        const computedHash = hmac.digest();
        if (Buffer.compare(computedHash, user.passwordHash) === 0) {
            const refreshToken = this.createRefreshToken(user, "0.0.0.0");
            await this.deleteOldRefreshTokens(user.id);
            const createdRefreshToken = await this.refreshTokenRepository.save(refreshToken);
            const { token, expires } = createdRefreshToken;
            return {
                accessToken: await this.signToken(user.id, user.email, user.username),
                refreshToken: { token: token, expires: expires }
            };
        }
        throw new common_1.BadRequestException('Wrong credentials');
    }
    async signup(signupUserDto) {
        const user = new user_entity_1.User();
        user.email = signupUserDto.email;
        user.firstName = signupUserDto.firstName;
        user.lastName = signupUserDto.lastName;
        user.username = signupUserDto.userName;
        const salt = (0, crypto_1.randomBytes)(128);
        const hmac = (0, crypto_1.createHmac)('SHA512', salt);
        hmac.update(signupUserDto.password);
        const computedHash = hmac.digest();
        user.passwordSalt = salt;
        user.passwordHash = computedHash;
        const createdUser = await this.userService.add(user);
        return {
            email: createdUser.email,
            firstName: createdUser.firstName,
            lastName: createdUser.lastName,
            username: createdUser.username,
        };
    }
    async refreshTokens(refreshToken, ipAddress) {
        const refreshTokenResult = await this.refreshTokenRepository.findOne({
            where: {
                token: refreshToken
            },
            relations: {
                user: true
            }
        });
        if (!refreshTokenResult)
            throw new common_1.BadRequestException("Refresh token doesn't exist");
        if (refreshTokenResult.revoked !== null) {
            await this.revokeDescendantRefreshTokens(refreshTokenResult, ipAddress, `Attempted reuse of revoked ancestor token: ${refreshTokenResult.token}`);
            throw new common_1.BadRequestException("This refresh token is revoked because attempted reuse of revoked ancestor");
        }
        if (new Date().getTime() >= refreshTokenResult.expires.getTime())
            throw new common_1.BadRequestException("Refresh token is not active");
        const user = await this.userService.getById(refreshTokenResult.user.id);
        const newRefreshToken = await this.rotateRefreshToken(user, refreshTokenResult, ipAddress);
        const addedRefreshToken = await this.refreshTokenRepository.save(newRefreshToken);
        const createdAccessToken = await this.signToken(user.id, user.email, user.username);
        const { token, expires } = addedRefreshToken;
        return {
            accessToken: createdAccessToken,
            refreshToken: {
                token,
                expires
            }
        };
    }
    signToken(userId, email, username) {
        const data = { sub: userId, email: email, username: username };
        return this.jwt.signAsync(data, {
            expiresIn: '15m',
            secret: process.env.SECRET_KEY,
        });
    }
    createRefreshToken(user, ipAddress) {
        const currentDate = new Date();
        const expirationDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        const refreshToken = new refresh_token_entity_1.RefreshToken();
        refreshToken.token = this.generateRandomRefreshToken();
        refreshToken.user = user;
        refreshToken.expires = expirationDate;
        refreshToken.createdByIp = ipAddress;
        return refreshToken;
    }
    generateRandomRefreshToken() {
        const numberByte = (0, crypto_1.randomBytes)(32);
        return numberByte.toString('base64');
    }
    async deleteOldRefreshTokens(userId) {
        const refreshTokens = await this.refreshTokenRepository.find({
            where: { user: { id: userId } }
        });
        const result = await this.refreshTokenRepository.remove(refreshTokens);
    }
    async rotateRefreshToken(user, refreshToken, ipAddress) {
        const newRefreshToken = this.createRefreshToken(user, ipAddress);
        await this.revokeRefreshToken(refreshToken, ipAddress, "New refresh token requested", newRefreshToken.token);
        return newRefreshToken;
    }
    async revokeRefreshToken(refreshToken, ipAddress, reason, replacedByToken) {
        refreshToken.revoked = new Date();
        refreshToken.revokedByIp = ipAddress;
        refreshToken.reasonRevoked = reason;
        refreshToken.replacedByToken = replacedByToken;
        await this.refreshTokenRepository.save(refreshToken);
    }
    async revokeDescendantRefreshTokens(refreshToken, ipAddress, reason) {
        if (!refreshToken.replacedByToken)
            return;
        const childToken = await this.refreshTokenRepository.findOne({
            where: {
                token: refreshToken.replacedByToken
            }
        });
        if (childToken !== null && childToken.revoked === null)
            await this.revokeRefreshToken(childToken, ipAddress, reason, null);
        else
            await this.revokeDescendantRefreshTokens(childToken, ipAddress, reason);
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(refresh_token_entity_1.RefreshToken)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map