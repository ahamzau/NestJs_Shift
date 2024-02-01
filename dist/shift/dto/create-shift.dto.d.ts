import { Status } from "../entity/shift.entity";
export declare class CreateShiftDto {
    assignedId: number;
    startDate: Date;
    finishDate: Date;
    status: Status;
    place: string;
}
