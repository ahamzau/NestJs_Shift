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
var WsJwtStrategy_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsJwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
let WsJwtStrategy = WsJwtStrategy_1 = class WsJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'wsjwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                WsJwtStrategy_1.extractJWT,
                passport_jwt_1.ExtractJwt.fromUrlQueryParameter('bearerToken'),
            ]),
            secretOrKey: process.env.SECRET_KEY,
        });
    }
    static extractJWT(req) {
        if (req.cookies &&
            'token' in req.cookies &&
            req.cookies.user_token.length > 0) {
            return req.cookies.token;
        }
        return null;
    }
    async validate(payload) {
        return { userId: payload.sub, email: payload.email };
    }
};
WsJwtStrategy = WsJwtStrategy_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], WsJwtStrategy);
exports.WsJwtStrategy = WsJwtStrategy;
//# sourceMappingURL=ws-jwt.strategy.js.map