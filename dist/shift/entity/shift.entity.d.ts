import { User } from 'src/user/entity/user.entity';
export declare class Shift {
    id: number;
    assignee: User;
    assigned: User;
    startDate: Date;
    finishDate: Date;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    place: string;
}
export declare enum Status {
    planned = 0,
    accepted = 1,
    modified = 2
}
