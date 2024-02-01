import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
export declare class ShiftController {
    private readonly shiftService;
    constructor(shiftService: ShiftService);
    createShift(createShiftDto: CreateShiftDto, req: any): Promise<import("./entity/shift.entity").Shift>;
    getAll(): Promise<import("./entity/shift.entity").Shift[]>;
}
