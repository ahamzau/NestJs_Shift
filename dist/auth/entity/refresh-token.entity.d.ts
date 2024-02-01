import { User } from "src/user/entity/user.entity";
export declare class RefreshToken {
    id: number;
    token: string;
    expires: Date;
    created: Date;
    createdByIp: string;
    revoked: Date;
    revokedByIp: string;
    replacedByToken: string;
    reasonRevoked: string;
    user: User;
}
