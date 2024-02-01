import { ShiftPeriod } from './entity/shift-period.entity';
import { Repository } from 'typeorm';
import { ShiftPeriodDto } from './dto/shift-period.dto';
export declare class ShiftPeriodService {
    private readonly shiftPeriodRepository;
    constructor(shiftPeriodRepository: Repository<ShiftPeriod>);
    add(shiftPeriodCreateDto: ShiftPeriodDto): Promise<ShiftPeriodDto & ShiftPeriod>;
    getAll(): Promise<ShiftPeriod[]>;
}
