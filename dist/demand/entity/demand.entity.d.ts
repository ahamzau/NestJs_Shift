import { Shift } from "src/shift/entity/shift.entity";
import { User } from "src/user/entity/user.entity";
export declare class Demand {
    id: number;
    user: User;
    oldShift: Shift;
    newShift: Shift;
    status: string;
    isActive: boolean;
}
