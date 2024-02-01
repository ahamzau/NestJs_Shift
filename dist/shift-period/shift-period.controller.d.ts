import { ShiftPeriodService } from './shift-period.service';
import { ShiftPeriodDto } from './dto/shift-period.dto';
export declare class ShiftPeriodController {
    private readonly shiftPeriodService;
    constructor(shiftPeriodService: ShiftPeriodService);
    getAll(): Promise<import("./entity/shift-period.entity").ShiftPeriod[]>;
    add(createShiftPeriodDto: ShiftPeriodDto): Promise<ShiftPeriodDto & import("./entity/shift-period.entity").ShiftPeriod>;
}
