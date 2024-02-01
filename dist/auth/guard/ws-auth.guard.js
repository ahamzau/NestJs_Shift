"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class WsAuthGuard extends (0, passport_1.AuthGuard)('wsjwt') {
    constructor() {
        super();
    }
    getRequest(context) {
        return context.switchToWs().getClient().handshake;
    }
}
exports.WsAuthGuard = WsAuthGuard;
//# sourceMappingURL=ws-auth.guard.js.map