/// <reference types="node" />
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    passwordSalt: Buffer;
    passwordHash: Buffer;
    area_included: string;
}
