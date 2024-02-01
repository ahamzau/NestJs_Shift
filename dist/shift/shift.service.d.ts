import { Shift } from './entity/shift.entity';
import { Repository } from 'typeorm';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UserService } from 'src/user/user.service';
export declare class ShiftService {
    private readonly shiftRepository;
    private readonly userService;
    constructor(shiftRepository: Repository<Shift>, userService: UserService);
    createShift(createShiftDto: CreateShiftDto, userId: number): Promise<Shift>;
    getAll(): Promise<Shift[]>;
    getById(shiftId: number): Promise<Shift>;
}
