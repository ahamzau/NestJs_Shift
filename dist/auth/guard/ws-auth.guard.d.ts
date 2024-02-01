import { ExecutionContext } from '@nestjs/common';
declare const WsAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class WsAuthGuard extends WsAuthGuard_base {
    constructor();
    getRequest(context: ExecutionContext): any;
}
export {};
