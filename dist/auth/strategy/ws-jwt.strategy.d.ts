import { Strategy } from 'passport-jwt';
declare const WsJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class WsJwtStrategy extends WsJwtStrategy_base {
    constructor();
    private static extractJWT;
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
